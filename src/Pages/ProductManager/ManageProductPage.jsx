import React, { useEffect, useState } from 'react'
import AddProductMenu from '../../Componets/PMComponets/AddProductMenu'
import { fetchProducts, deleteProduct } from '../../MyCodes/ed5'
import ProductIcon from '../../Componets/PMComponets/ProductIcon'
import EditProductPage from '../../Componets/PMComponets/EditProductPage'

function ManageProductPage() {
  const [showAdd, setShowAdd] = useState(false)
  const [showRemove, setShowRemove] = useState(false)
  const [ProductsFIREBASE, setProductsFIREBASE] = useState({})
  const [seletedProduct, setSelectedProdct] = useState()
  const toggleShowAdd = () => {setShowAdd(!showAdd)}
  const toggleShowRemove = () => {setShowRemove(!showRemove)}
  useEffect(()=>{fetchProducts(setProductsFIREBASE)},[showAdd,showRemove])
  const [showEdit, setShowEdit] = useState(false)
  const toggleShowEdit = (data) => {setShowEdit(!showEdit); setSelectedProdct(data)}
  const productInfoMAP = Object.values(ProductsFIREBASE).map(({name, price, desc, img})=>{return{name:name, price:price, desc:desc, img:img}})


 

  const productMAP = Object.values(ProductsFIREBASE).map(({name, price, desc, img})=>{
    if(name == null) return
    const data = {
      name:name,
      price:price,
      img:img,
      desc:desc,
    }
    return(
     
        <ProductIcon        key={name} 
                            name={name} 
                            price={price} 
                            desc={desc} 
                            img={img} 
                            showRemove={showRemove} 
                            deleteProduct={deleteProduct} 
                            setProductsFIREBASE={setProductsFIREBASE}
                            data={data}
                            toggleShowEdit={toggleShowEdit}
                            />
)
  })
  

  
  return (
    <div className='absolute z-0 h-screen w-screen bg-gradient-to-br from-slate-800 to-slate-900 overflow-y-scroll'>
      {showAdd && <AddProductMenu toggleShowAdd={toggleShowAdd} key={'showadd'}/> }
      {showEdit && <EditProductPage toggleShowEdit={toggleShowEdit} seletedProduct={seletedProduct} key={'showedit'}/>}
    
      <div className='h-40 mt-20'>
        <div className='flex text-3xl justify-center shadow-lg shadow-black rounded-b-[5rem]'>
          <button disabled={showRemove} onClick={toggleShowAdd} className=' bg-lime-400 rounded-full h-24 w-40 m-5 font-bold text-white border-4 border-emerald-400'>Add</button>
          <button onClick={toggleShowRemove} className='  bg-rose-400 rounded-full h-24 w-40 m-5 font-bold text-white border-4 border-orange-300'>{`${!showRemove ? 'Remove':'Cancel'}`}</button>
        </div>
        <div className="p-5 gap-y-5 lg:p-20  grid gap-10 lg:gap-16 lg:grid-cols-4 grid-cols-3 grid-flow-row-dense bg-slate-800 h-[35rem] rounded-t-[5rem] mt-5 overflow-y-scroll">

        {productMAP}


        </div>
      </div>
    </div>
    
  )
}

export default ManageProductPage