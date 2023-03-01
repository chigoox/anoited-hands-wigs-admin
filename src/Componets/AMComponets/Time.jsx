import React from 'react'
import {handleInput5} from '../../MyCodes/ed5'

function Time({ name, hidden, setAvailableTime }){

    return(
        <div>
            {hidden &&  <h1 className='font-bold text-center'>{name}</h1>}
            {hidden && <div className='bg-slate-300 h-fit p-4 rounded-xl shadow shadow-black grid grid-cols-2 m-auto w-[98%] mt-4'>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"0_8am_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>8 am</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"1_9am_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>9 am</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"2_10am_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>10 am</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"3_11am_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>11 am</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"4_12pm_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>12 pm</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"5_1pm_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>1 pm</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"6_2pm_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>2 pm</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"7_3pm_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>3 pm</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"8_4pm_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>4 pm</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"9_5pm_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>5 pm</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"10_6pm_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>6 pm</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"11_7pm_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>7 pm</h1>
                    </div>
                    <div className='flex items-center m-1'>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='h-8 w-10' type="checkbox" name={"12_8pm_" + name}/>
                    <h1 className='font-bold text-lg w-14 text-justified '>8 pm</h1>
                    </div>
                </div>}
        </div>
    
    )
}

export default Time