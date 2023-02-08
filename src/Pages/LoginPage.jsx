import React, { useState} from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import SignUpPage from './SignUpPage';
import LoginError from '../Componets/LoginComponets/LoginError';
import { AUTH } from '../Config/Firebase'
import { errorCatcher, clearError, handleInput5, addUserInfoToDatabase } from '../MyCodes/ed5';

export default function LoginPage(props) {
    const [userPass, setUserPass] = useState({})
    const [showSignUp, setShowSignUp] = useState(false)
    const [errorTransfer, setErrorTransfer] = useState([]);
    

    const toggleSignup = () => {setShowSignUp(!showSignUp)}


    function loginRegister(event){
    signInWithEmailAndPassword(AUTH, userPass.user, userPass.pass)
    .then((userCredential) => {
        localStorage.setItem("userData", userCredential.user)
        console.log('logged in')
        props.setUser(userCredential.user)
        addUserInfoToDatabase({adminSignedIn:true},  userCredential.user)
        props.toggleLoggledin()
        })
        .catch((error) => {
            errorCatcher(error, setErrorTransfer)
            
        });


    }
   
    



    function handleInputChange(event,setterFunction){
        setUserPass(cred => {
            return(
                event.target.name === "user" ? 
                cred = {...cred, user: event.target.value} 
                : {...cred, pass: event.target.value}
                
                )
            })
        }
        

        //pageFrom(true, uid)
        return (
        <div className="Login relative h-screen bg-gradient-to-tr to-cyan-500 from-rose-900 py-4">
            <div className="lg:visi ble invisible absolute w-fit h-9 top-9 p-1 right-[27%] bg-gradient-to-bl from-slate-700 to-slate-900 shadow shadow-black">
                <h3 className='text-center font-bold text-white text-lg'>Welcome back!</h3>
            </div>
            {showSignUp && <SignUpPage auth={AUTH} toggleSignup={toggleSignup}/>}
            <div className='overflow-hidden h-[700px] w-50 m-4 md:m-auto rounded-2xl relative shadow-xl bg-gradient-to-b from-black  to-slate-900 lg:w-[30%]'>
                {errorTransfer.length > 0 && <LoginError clicked={()=>{clearError(setErrorTransfer)}} error={errorTransfer}/>}
                <div className="relative h-[100%] w-[100%]">
                    <div className='absolute h-[50%] w-full'>
                        <h1 className='font-bold text-6xl lg:text-7xl md:text-center text-white mt-6 mx-4'>Annoited Hands</h1>
                        <h1 className='font-bold text-6xl lg:text-7xl text-white md:text-center mx-4'>Wigs</h1>

                    </div>
                    <div className='w-full absolute top-80'>
                        <div className='inputContainer flex justify-center    flex-wrap lg:flex-col relative lg:left-[10%] p-4 '>
                            <input name="user"onChange={(event)=>{handleInput5(event,setUserPass)}} className="bg-transparent rounded-full my-1  h-12 lg:w-[80%] w-[90%] border-[3px] border-white text-white text-center"type="text" placeholder='Email'></input>
                            <input name="pass"onChange={(event)=>{handleInput5(event,setUserPass)}} className="bg-transparent rounded-full my-1 text-center h-12 lg:w-[80%] border-[3px] w-[90%] border-white text-white "type="password" placeholder='Password'></input>
                        </div>
                        <div className='my-16 flex flex-col' >
                            <button onClick={loginRegister} className='hover:text-cyan-300 hover:bg-white bg-gradient-to-l from-blue-900 to-slate-900 shadow-lg  rounded-full h-14 w-[65%] m-auto mb-4 border-white text-white font-bold lg:text-4xl text-3xl text-center p-2'>Log In</button>
                            <div className="flex justify-center">
                                <p className='text-white text-center'>Don't have an account?</p>
                                <button onClick={toggleSignup}  className='hover:text-orange-400 w-fit text-white font-bold text-center ml-1'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
                    //<img className="object-cover w-[100%] h-[100%]"src='https://t4.ftcdn.net/jpg/03/47/15/51/360_F_347155190_uOpdyhRV68cSrx0fTwOH6MVTkvXpWHmG.jpg' alt=''/>
    )

}
