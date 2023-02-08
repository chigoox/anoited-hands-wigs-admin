import { ref, getDownloadURL, uploadBytesResumable, deleteObject   } from "firebase/storage";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { AUTH, DATABASE, STORAGE } from '../Config/Firebase';
import React, { useEffect, useState} from 'react'





export function handleInput5({ target },setterFunction){
    const key = target.name
    const value = target.value     
  
    try{
        setterFunction((old) =>{
            return {...old, [key]:value}
         })       
    }catch{
        if(!setterFunction){
            console.log('need stateSetter')
        }
    }
    
}



export async function addUserInfoToDatabase(data,user){
    const docRef = doc(DATABASE, "Admin-users", `${user.email} ${user.uid}`) 
    await setDoc(docRef, data, { merge: true });   
     
}
async function addProductInfoToDatabase(data,productName){
    const docRef = doc(DATABASE, "Products", productName) 
    await setDoc(docRef, data, { merge: true });   
     
}

export function errorCatcher(error,setErrorTransfer){
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorTransfer([errorCode,errorMessage])  
}
export function clearError(setErrorTransfer){
    setErrorTransfer([])
}



 function deleteFile(key){
    const pic = document.getElementById("upload").files[0]
    const imagesRef = ref(STORAGE, 'ProductImg/'+ key); // make ref to your firebase storage and select images folder

   if(pic) deleteObject(imagesRef).then(() => {
        // File deleted successfully
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
 }








 
  function uploadfile(key, setter,uploadinfo){
    console.log(uploadinfo)   
       const imagesRef = ref(STORAGE, 'ProductImg/'+ key); // make ref to your firebase storage and select images folder
       const pic = document.getElementById("upload").files[0]
       
       const metadata = {
           
        contentType: pic.type,
      };
       uploadBytesResumable(imagesRef,pic, metadata).on('state_changed', 
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

            setter((old)=>{return {...old, [key]: downloadURL }})
  


         });
       }
     );
     
   };



export {addProductInfoToDatabase, uploadfile, deleteFile}