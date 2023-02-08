import React, {useState} from 'react'
import LoginError from '../Componets/LoginComponets/LoginError';
import { DATABASE } from '../Config/Firebase'
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { errorCatcher , clearError, handleInput5, addUserInfoToDatabase } from '../MyCodes/ed5';

function SignUpPage(props) {
    const [data, setData] = useState()
    const [errorTransfer, setErrorTransfer] = useState([]);
    
    



   

    function createAccount(acountInfo){
        if (acountInfo?.Password == acountInfo?.CPassword && acountInfo?.Password.match(/[A-Z1-9!@#$%&*?]/) != null && acountInfo?.Password.match(/[a-z]+/) != null){
            createUserWithEmailAndPassword(props.auth, acountInfo.Email, acountInfo.Password)
        .then((userCredential) => {
            const user = userCredential.user
            const dataCreation = {
                email: data.Email,
                FirstName: data.FirstName,
                LastName:  data.LastName,
                Phone: data.Phone,
            }
            addUserInfoToDatabase(dataCreation,user)
            props.toggleSignup()
            
        })  
        .catch((error) => {
            errorCatcher(error,setErrorTransfer)
        });
        }else if (acountInfo?.Password.match(/[A-Z1-9!@#$%&*?]/) != null || acountInfo?.Password.match(/[A-Z]+/) != null){
            errorCatcher({code:"Weak password-", message: "-Password Needs Capital letter and symbol"},setErrorTransfer)
        }else{
            errorCatcher({code:"Password Mixmatch-", message: "-Password does not match"},setErrorTransfer)
        }
        
    }

    function DataSetter(key, value){
            setData((data) => {
            return data = {...data, [key] : value}
            } )
        }
    function handleChangeInput(event){
        DataSetter(event.target.name, event.target.value)
    }
  return (
    <div className='absolute z-40 left-0 top-0 lg:h-[99.5%] h-[89.5%] w-[99vw]'>
        {errorTransfer.length > 0 && <LoginError clicked={()=>{clearError(setErrorTransfer)}} error={errorTransfer}/>}
        <div className="relative lg:w-[25vw]  top-28 shadow-black shadow-md bg-gradient-to-t from-slate-900 to-slate-800 w-[85%]   lg:px-[3%] px-[8%] lg:h-[65%] h-[75%] m-auto rounded-lg border-violet-600 border-opacity-30 border-2">
            <button onClick={props.toggleSignup} className='absolute -top-5  right-[45%] rounded-full bg-slate-500 text-white w-12 h-12 border-4 border-slate-800 font-bold text-3xl hover:border-red-800 hover:bg-slate-900 hover:text-red-500'>X</button>
            <div className='top-[6%] relative'>
                <h1 className='font-bold text-3xl text-center my-5 text-white'>Register</h1>
                <div className=''>
                    <input  placeholder={'First Name'}          className={'bg-transparent border-2 rounded-full  my-1  p-2 w-[99%] h-12 font-bold text-lg text-white'}  name={'FirstName'}  onChange={handleChangeInput}  type={'text'}   />
                    <input  placeholder={'Last Name'}           className={'bg-transparent border-2 rounded-full  my-1  p-2 w-[99%] h-12 font-bold text-lg text-white'}  name={'LastName'}   onChange={handleChangeInput}  type={'text'}   />
                    <input  placeholder={"Email"}               className={'bg-transparent border-2 rounded-full  my-1  p-2 w-[99%] h-12 font-bold text-lg text-white'}  name={'Email'}      onChange={handleChangeInput}  type={'email'}  />
                    <input  placeholder={'Phone'}               className={'bg-transparent border-2 rounded-full  my-1  p-2 w-[99%] h-12 font-bold text-lg text-white'}  name={'Phone'}      onChange={handleChangeInput}  type={'tel'}    />
                    <input  placeholder={'Password'}            className={'bg-transparent border-2 rounded-full  my-1  p-2 w-[99%] h-12 font-bold text-lg text-white'}  name={'Password'}   onChange={handleChangeInput}  type={'password'}   />
                    <input  placeholder={'Password'}            className={'bg-transparent border-2 rounded-full  my-1  p-2 w-[99%] h-12 font-bold text-lg text-white'}  name={'CPassword'}  onChange={handleChangeInput}  type={'password'}   />
                </div>
                <div className='w-full flex justify-center'> 
                    <button className='h-14 mt-5 font-bold text-white border-2 border-slate-400 w-3/4' onClick={()=>{createAccount(data)}}>Sign Up</button>
                </div>
            </div>
         
        </div>

    </div>
  )
}

export default SignUpPage