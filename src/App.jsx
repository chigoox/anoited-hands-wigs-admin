import SideBar from '../src/Componets/SideBar'
import { useEffect, useState } from 'react'
import './App.css'
import {LoginPage, ManageProductPage, AppointmentPage} from './Pages/0PageExporter'
import {getDoc, doc, setDoc } from "firebase/firestore";
import { DATABASE } from '../src/Config/Firebase'

  //HANDEL SIGN OUT LATER!

function App() {
  const [loggedin, setLoggedin] = useState(false)
  const [userData,setUserData] = useState({})
  const [user, setUser] = useState({})
  const [currentPage, setCurrentPage] = useState()
  const UserID = `${user.email} ${user.uid}`
  
  const toggleLoggledin = () =>{setLoggedin(!loggedin)}
  
  
  async function getUserData(userID){
     const docRef  = doc(DATABASE, "Admin-users", userID);
 
     const docSnap = await getDoc(docRef);
     
     if (docSnap.exists()) {
       if (Object.keys(userData).length == 0){
        setUserData(docSnap.data())
       }
     } else {
       if (Object.keys(userData).length != 0){
        setUserData({})
       }
     }
   }

    getUserData(UserID)
    
    useEffect(()=>{getUserData(UserID)},[DATABASE])

    return (
      <div className="App w-screen h-screen">
          {!loggedin && <LoginPage setUser={setUser} toggleLoggledin={()=>{toggleLoggledin()}}/>}
          {(loggedin && userData.adminSignedIn) && 
                              <div>
                                  <SideBar currentPage={setCurrentPage}/>
                                  {currentPage?.Products && <ManageProductPage toggleLoggledin={()=>{toggleLoggledin()}}/> }
                                  {currentPage?.Appointments && <AppointmentPage userData={userData} UserID={UserID} toggleLoggledin={()=>{toggleLoggledin()}}/> }
                              </div>  
                      }

      </div>
    )
  } 

export default App
//{loggedin &&  <LoginPage toggleLoggledin={toggleLoggledin}/>}
