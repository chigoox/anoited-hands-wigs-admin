import React, { useEffect, useState } from 'react'
import { userInfoToDatabase, handleInput5, setAva, sortArray } from '../../MyCodes/ed5'
import Time from './Time'

function AviabilityPage({ toggleAviability, UserID, userData }) {
    const [availabilityDay,setAvailabilityDay] = useState([])
    const [availableTime, setAvailableTime] = useState({})
    const [avaiable, setAvaiable] = useState()
    const hidden = (item) => {return (document.querySelector(`[name=${item}]`).checked )? true:false}
    const time = userData.time
    
    //console.log(availableTime, availabilityDay)
    
    const days = Object.keys(availabilityDay).map((key) =>{
       const hours = Object.keys(availableTime).map((key1) =>{//arraym [time]
       // console.log(key1.includes(key), key, key1)
            
      // console.log(Object.keys(availableTime))
     ////  console.log(key1.includes(key), key, key1)
            if (key1.includes(key)) return(
                Object.keys(availableTime).filter(item => item.includes(key))
                 // availableTime//[key1]
            )
           }).filter( Boolean )

           //console.log(hours[0])
           const hrToOBJ = Object.assign({},sortArray(hours[0])); 
           
           
           return(
            {
               [key]:  hrToOBJ
            }
            )
    })

    console.log(days)
    useEffect(()=>{
        days.forEach((item)=>{setAvaiable((old)=>{return {...old, [Object.keys(item)]:Object.values(item)[0]}})})
   },[availableTime,availabilityDay])

  
    const submit = () => {
        const data = {time: avaiable}
        setAva(data)
        toggleAviability()
      }

   


  return (
    <div className='fixed top-0 left-0 z-10 w-screen h-screen flex bg-slate-900 bg-opacity-75 transition-all'> 
        <div className="relative shadow-md p-4 shadow-black bg-slate-400 rounded-3xl h-[34rem] w-[90%] m-auto lg:w-[20%]">
        <div className='flex'>
            <button onClick={toggleAviability} className='rounded-full m-auto bg-slate-900 font-bold text-rose-900 text-center w-10 text-3xl bottom-8 relative'>X</button>
        </div>
        <div className="flex justify-between px-6 font-bold ">
            <h1>M</h1>
            <h1>T</h1>
            <h1>W</h1>
            <h1>T</h1>
            <h1>F</h1>
            <h1>S</h1>
            <h1>S</h1>
        </div>
            <div className="flex justify-between p-2 border h-14 ">
                
                <input onChange={(event)=>{handleInput5(event,setAvailabilityDay)}} className='h-8 w-10' type="checkbox" name="monday"/>
                <input onChange={(event)=>{handleInput5(event,setAvailabilityDay)}} className='h-8 w-10' type="checkbox" name="tuesday"/>
                <input onChange={(event)=>{handleInput5(event,setAvailabilityDay)}} className='h-8 w-10' type="checkbox" name="wednesday"/>
                <input onChange={(event)=>{handleInput5(event,setAvailabilityDay)}} className='h-8 w-10' type="checkbox" name="thursday"/>
                <input onChange={(event)=>{handleInput5(event,setAvailabilityDay)}} className='h-8 w-10' type="checkbox" name="friday"/>
                <input onChange={(event)=>{handleInput5(event,setAvailabilityDay)}} className='h-8 w-10' type="checkbox" name="saturday"/>
                <input onChange={(event)=>{handleInput5(event,setAvailabilityDay)}} className='h-8 w-10' type="checkbox" name="sunday"/>

            </div>
            <div className='overflow-y-scroll h-[21.5rem] my-4 border-y-2 border-rose-600 rounded-xl'>
                {Object.keys(availabilityDay).map((item, index)=>{
                    return(
                        <Time userData={userData} name={item} setAvailableTime={setAvailableTime}  key={item} hidden={hidden(item)}/> //Object.keys(item)[index].includes()
                    )
                })}
            </div>
            <div className='flex'>
                <button  onClick={submit} className='h-12 w-[90%] bg-blue-900 m-auto rounded-full'>
                    <h1 className='text-bold text-white text-xl font-bold'>Submit</h1>
                </button>
            </div>
        </div>

    </div>
  )
}

export default AviabilityPage