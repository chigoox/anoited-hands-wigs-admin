import React, { useEffect, useState } from 'react'
import AviabilityPage from '../../Componets/AMComponets/AviabilityPage'
import OrderButton from '../../Componets/OMComponets/OrderButton'
import { fetchOrders } from '../../MyCodes/ed5'

function ManageOrderPage({ user }) {
    const [showAviablility, setShowAviablility] = useState(false)
    const [orderData, setOrderData] = useState()
    const [reRender, setReRender] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [selected, setSelected] = useState({ Active: true, Complete: false })
    const toggleShowDelete = () => { setShowDelete(!showDelete) }
    const toggleAviability = () => { setShowAviablility(!showAviablility) }
    const toggleRerender = () => { setReRender(!reRender) }

    useEffect(() => {
        fetchOrders(setOrderData)
    }, [])
    const Buttons = ({ name }) => {
        const toggleMenu = () => { setSelected({ [name]: true }) }
        return (
            <button onClick={() => { toggleMenu(name) }} className={`p-4 rounded-full ${selected[name] ? 'bg-rose-500 h-24 w-24' : 'h-14 w-24 bg-rose-300'} hover:bg-rose-600 hover:scale-110 duration-500 ease-in-out text-white shadow shadow-rose-900  m-auto transition-all flex justify-center`}>
                <h1 className='font-bold text-center m-auto'>{name}</h1>
            </button>
        )
    }




    return (
        <div className='absolute z-0 h-screen w-screen bg-gradient-to-br from-slate-200 to-slate-100 overflow-y-scroll'>
            {/* Header */}
            <div className='h-20 bg-slate-100 p-4'>
                <h1 className='text-center font-bold text-4xl'>Orders</h1>
            </div>
            {/* Body */}
            <div className='h-32 flex justify-around'>
                <Buttons name={'Active'} />
                <Buttons name={'Complete'} />
            </div>
            <div className="overflow-y-scroll relative h-fit flex flex-col justify-start items-center p-4">
                {orderData ? Object.keys(orderData?.active).map((order, index) => {
                    return <OrderButton user={user} order={orderData} setOrderData={setOrderData} selected={selected} orderName={Object.keys(orderData.active)[index]} />
                }) : []
                }
            </div>
        </div>
    )
}

export default ManageOrderPage

