import React, { useState } from 'react'

function ProductIcon({data, toggleShowEdit, img, name, price, showRemove, deleteProduct, setProductsFIREBASE }){
    const [Hidden,setHidden] = useState(false)
    const toggleHidden =()=>{setHidden(!Hidden)}
  
    
    return(
      <div hidden={Hidden} className=' relative h-48 py-4 w-fit'>
        {!Hidden && <button disabled={showRemove} onClick={()=>{toggleShowEdit(data)}} className='  h-36 w-24 lg:w-32 relative'>
        {showRemove && <button onClick={()=>{deleteProduct(name = name? name : new Date(),setProductsFIREBASE);toggleHidden()}} className='absolute right-0 -top-2 w-8 h-8 rounded-full bg-slate-900 text-rose-800 font-bold z-30'>X</button>}
          <div className='m-auto rounded-2xl w-20 h-20 lg:w-32 lg:h-32 bg-white overflow-hidden'>
            
          {img && <img className='z-30 h-fit w-full object-cover' src={img} alt="noIMG" />}
          </div>
        <div className='lg:w-32  relative h-24 mt-2'>
            <h1 className=' font-bold text-white text-center text-lg h-14'>{name}</h1>
            <h1 className=' w-full border-rose-700 border absolute shadow-black shadow font-bold text-white text-center'>${price}</h1>
        </div>
        </button>}
      </div>
    )
  }

export default ProductIcon