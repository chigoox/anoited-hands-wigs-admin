import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import { collection, deleteDoc, doc, setDoc, getDocs, getDoc, updateDoc, deleteField } from "firebase/firestore";
import app, { AUTH, DATABASE, STORAGE } from '../Config/Firebase';
import React, { useEffect, useState } from 'react'







export function handleInput5({ target }, setterFunction, ava) {
  const key = target.name
  const value = target.value
  const checked = target.checked

  if (ava) {
    setterFunction((old) => {
      if (value == 'on') return { ...old, Time: { [key]: checked } }
      return { ...old, [key]: value }
    })
  } else {
    try {
      setterFunction((old) => {
        if (value == 'on') return { ...old, [key]: checked }
        return { ...old, [key]: value }
      })
    } catch {
      if (!setterFunction) {
        console.log('need stateSetter')
      }
    }
  }

}



export async function addUserInfoToDatabase(data, user) {
  const docRef = doc(DATABASE, "Admin-users", `${user.email} ${user.uid}`)
  await setDoc(docRef, data, { merge: true });

}
export async function userInfoToDatabase(data, user) {
  console.log('wok')
  const docRef = doc(DATABASE, "Admin-users", user)
  await setDoc(docRef, data, { merge: true });

}

export async function userInfoToDatabaseNotAdmin(data, user) {
  console.log('wok')
  const docRef = doc(DATABASE, "Users", user)
  await setDoc(docRef, data, { merge: true });

}

export async function setAva(data) {
  const docRef = doc(DATABASE, "Appointments", 'Availability')
  await setDoc(docRef, data, { merge: true });

}
async function addProductInfoToDatabase(data, productName) {
  const docRef = doc(DATABASE, "Products", productName)
  await setDoc(docRef, data, { merge: true });

}


async function fetchProducts(setProducts) {
  const querySnapshot = await getDocs(collection(DATABASE, "Products"));
  querySnapshot.forEach((doc) => {
    setProducts((old) => {
      return ({
        ...old, [doc.id]: doc.data()
      })
    })

  });
}

async function fetchAppointments(setAppointmentData) {
  const docRef = doc(DATABASE, 'Appointments', 'Appointments');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    setAppointmentData(docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function fetchOrders(setOrderData) {
  const unfilRef = doc(DATABASE, 'Orders', 'UnfullfiledOrders');

  const unfilSnap = await getDoc(unfilRef);

  if (unfilSnap.exists()) {
    setOrderData((old) => {
      return { ...old, active: unfilSnap.data() }
    });
    return unfilSnap.data()
  }

}



async function MarkOrder(name, orderNumber, setOrderData, user) {
  const old = await fetchOrders(setOrderData)
  const ref = doc(DATABASE, 'Orders', 'UnfullfiledOrders');
  const a = `Order ${orderNumber}.complete`


  console.log(a)
  await updateDoc(ref, {
    [`${name}.Order ${orderNumber}.complete`]: !old[`${name}`][`Order ${orderNumber}`].complete
  });
  userInfoToDatabaseNotAdmin({ Orders: { [`Order ${orderNumber}`]: { complete: !old[`${name}`][`Order ${orderNumber}`].complete } } }, user)
  await fetchOrders(setOrderData)

}
async function deleteProduct(product, setProducts) {
  await deleteDoc(doc(DATABASE, "Products", product))

}

async function deleteDocED5(Doc, Field) {
  await deleteDoc(doc(DATABASE, Doc, Field))

}

async function deleteAppointment(appointment, date, setAppointmentData) {
  const ref = doc(DATABASE, 'Appointments', 'Appointments');
  await updateDoc(ref, {
    [appointment]: deleteField()
  });
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  if (Object.values(docSnap.data()[date]).length < 1) {
    await updateDoc(ref, {
      [date]: deleteField()
    });

    fetchAppointments(setAppointmentData)
  }


}





















export function errorCatcher(error, setErrorTransfer) {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrorTransfer([errorCode, errorMessage])
}
export function clearError(setErrorTransfer) {
  setErrorTransfer([])
}



function deleteFile(key) {
  const pic = document.getElementById("upload").files[0]
  const imagesRef = ref(STORAGE, 'ProductImg/' + key); // make ref to your firebase storage and select images folder

  if (pic) deleteObject(imagesRef).then(() => {
    // File deleted successfully
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });
}



function sortArray(array) {
  const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' })
  const sorted = array ? array.sort((a, b) => collator.compare(a, b)) : console.log('NO ARRAY')
  return sorted
}





function uploadfile(key, setter, uploadinfo) {
  console.log(uploadinfo)
  const imagesRef = ref(STORAGE, 'ProductImg/' + key); // make ref to your firebase storage and select images folder
  const pic = document.getElementById("upload").files[0]

  const metadata = {

    contentType: pic.type,
  };
  uploadBytesResumable(imagesRef, pic, metadata).on('state_changed',
    (snapshot) => {

      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded


      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploadinfo(progress)
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      console.log(error)
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(ref(STORAGE, imagesRef)).then((downloadURL) => {
        if (downloadURL)
          setter((old) => { return { ...old, img: downloadURL } })



      });
    }
  );

};



export { MarkOrder, fetchOrders, deleteAppointment, deleteProduct, fetchAppointments, addProductInfoToDatabase, uploadfile, deleteFile, fetchProducts, sortArray }