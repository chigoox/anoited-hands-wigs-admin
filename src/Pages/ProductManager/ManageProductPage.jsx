import React, { useState } from 'react'
import AddProductMenu from '../../Componets/PMComponets/AddProductMenu'
function ManageProductPage() {
  const [showAdd, setShowAdd] = useState(false)
  const [showRemove, setShowRemove] = useState(false)
  const toggleShowAdd = () => {console.log('working');setShowAdd(!showAdd)}
  const toggleShowRemove = () => {setShowRemove(!showRemove)}
  
  function ProductIcon(){
    return(
      <div className=' h-36 w-24 relative'>
        {showRemove && <button className='absolute right-0 -top-2 w-8 h-8 rounded-full bg-slate-900 text-rose-800 font-bold'>X</button>}
        <div className='m-auto rounded-2xl w-20 h-20 bg-white'>
        
        </div>
        <h1 className='font-bold text-white text-center text-lg'>extra wig glue</h1>
      </div>
    )
  }
  
  
  
  
  
  return (
    <div className='absolute z-0 h-screen w-screen bg-gradient-to-br from-slate-800 to-slate-900 overflow-y-scroll'>
      {showAdd && <AddProductMenu toggleShowAdd={toggleShowAdd}/>}
      
    
      <div className='h-40 mt-20'>
        <div className='flex text-3xl justify-center shadow-lg shadow-black rounded-b-[5rem]'>
          <button onClick={toggleShowAdd} className=' bg-lime-400 rounded-full h-24 w-40 m-5 font-bold text-white border-4 border-emerald-400'>Add</button>
          <button onClick={toggleShowRemove} className='  bg-rose-400 rounded-full h-24 w-40 m-5 font-bold text-white border-4 border-orange-300'>{`${!showRemove ? 'Remove':'Cancel'}`}</button>
        </div>
        <div className="p-5 py-10 grid gap-10 grid-cols-3 grid-flow-row-dense bg-slate-800 h-[35rem] rounded-t-[5rem] mt-5 overflow-y-scroll">

        {<ProductIcon />}


        </div>
      </div>
    </div>
    
  )
}

export default ManageProductPage