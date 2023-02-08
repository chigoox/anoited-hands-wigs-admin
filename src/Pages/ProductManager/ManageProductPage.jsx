import React, { useState } from 'react'
import AddProductMenu from '../../Componets/PMComponets/AddProductMenu'
function ManageProductPage() {
  const [showAdd, setShowAdd] = useState(false)
  const toggleShowAdd = () => {console.log('working');setShowAdd(!showAdd)}
  return (
    <div className='absolute z-0 h-screen w-screen bg-gradient-to-br from-slate-800 to-slate-900 overflow-y-scroll'>
      {showAdd && <AddProductMenu toggleShowAdd={toggleShowAdd}/>}
      
      
      
      
      
      
      <div className='h-40 mt-20'>
        <div className='flex text-3xl justify-center shadow-lg shadow-black rounded-b-[5rem]'>
          <button onClick={toggleShowAdd} className=' bg-lime-400 rounded-full h-24 w-40 m-5 font-bold text-white border-4 border-emerald-400'>Add</button>
          <button className='  bg-rose-400 rounded-full h-24 w-40 m-5 font-bold text-white border-4 border-orange-300'>Remove</button>
        </div>
        <div className="bg-slate-800 h-[35rem] rounded-t-[5rem] mt-5"></div>
      </div>
    </div>
    
  )
}

export default ManageProductPage