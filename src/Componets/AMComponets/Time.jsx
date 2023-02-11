import React from 'react'
import {handleInput5} from '../../MyCodes/ed5'

function Time({ name, hidden, setAvailableTime }){
    return(
        <div>
            {hidden && <div hidden={true} className='bg-slate-300 h-40 rounded-xl shadow shadow-black flex flex-col m-auto w-[90%] mt-4'>
                    <h1 className='font-bold text-center'>{name}</h1>
                    <div className='flex items-center'>
                    <h1 className='font-bold text-xl w-14 text-right '>From</h1>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='my-2 h-10 w-[60%] ml-1 m-auto relative border-2 border-black' type="time" name={`${name}_from`} />

                    </div>
                    <div className='flex items-center'>
                    <h1 className='font-bold text-xl w-14 text-right '>To</h1>
                    <input onChange={(event)=>{handleInput5(event,setAvailableTime)}} className='my-2 h-10 w-[60%] ml-1 m-auto relative border-2 border-black' type="time" name={`${name}_to`} />

                    </div>
                </div>}
        </div>
    
    )
}

export default Time