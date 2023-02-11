import React, { useEffect, useState } from 'react'
import { handleInput5, addProductInfoToDatabase, uploadfile, deleteFile,  } from '../../MyCodes/ed5'
import Uploading from '../Uploading'


function AddProductMenu({ toggleShowAdd }) {
    const [productData, setProductData] = useState({category:'Female'})
    const [showUpload, setShowUpload] = useState(0)
   
    function addToShop(productData){
        addProductInfoToDatabase(productData, productData?.name)
        toggleShowAdd()
    }

    const openUpload = () => {
        document.getElementById('upload').click();
    }

  return (
    <div className='fixed z-10 w-screen h-screen flex bg-slate-900 bg-opacity-95 transition-all'>
       {showUpload && <Uploading per={showUpload} setUpload={setShowUpload}/>}
        <div className="relative shadow-md shadow-black bg-slate-400 rounded-3xl h-[33rem] w-[90%] m-auto lg:w-[20%]">
            <div className='flex'>
                <div className='h-16 w-16 m-3'>
                {productData.name && <div className='h-16 w-16 bg-slate-900  rounded-full'>
                    <button className='h-full w-full rounded-full' onClick={openUpload}></button>
                </div>}
                </div>
                <h1 className='text-lg font-bold self-center'>Product Image</h1>
                <button onClick={()=>{deleteFile('img');toggleShowAdd()}} className="self-center right-2 top-2 ml-12 h-12 w-20 bg-slate-900 text-rose-900 text-2xl font-bold rounded-full">X</button>
            </div>
            <div className=' m-auto w-[90%] h-[70%] relative'>
                <input  name={productData.name} id='upload' type='file' onChange={({target})=>{uploadfile(target.name, setProductData, setShowUpload )}} accept="image/png, image/jpeg" hidden/>
                <input onChange={(event)=>{handleInput5(event,setProductData)}} className='w-full h-14 rounded-full my-2 text-2xl font-bold p-3 shadow-sm shadow-black' placeholder='Product Name' type="text" name="name" id="" />
                <input onChange={(event)=>{handleInput5(event,setProductData)}} className='w-full h-14 rounded-full my-2 text-2xl font-bold p-3 shadow-sm shadow-black' placeholder='$Product Price' type="number" name="price" id="" />
                <textarea onChange={(event)=>{handleInput5(event,setProductData)}} className='w-full h-24 my-2 rounded-3xl font-bold p-4 shadow-sm shadow-black' placeholder='Product Description' type="text" name="desc" id="" />
                <select onChange={(event)=>{handleInput5(event,setProductData)}}  name="category" className='w-full h-12 my-2 rounded-full p-2'>
                    <optgroup label="Category">
                        <option value="Female">Female</option>
                        <option value="Girl">Girl</option>
                        <option value="Male">Male</option>
                        <option value="Boy">Boy</option>
                        <option value="Featured">Featured</option>
                    </optgroup>
                </select>
               <button className='h-14 w-[80%] mx-8 my-4 bg-blue-600 text-white font-bold text-3xl rounded-full' onClick={()=>{if(productData.name) addToShop(productData)}}>Add to Shop</button>
                <h1 className='relative bottom-4 text-center font-bold text-xl text-rose-700'>name required!</h1>
            </div>
       
       
        </div>

    </div>
  )
}

export default AddProductMenu