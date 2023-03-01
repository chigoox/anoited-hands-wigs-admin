import React, { useEffect, useState } from 'react'
import OrderInfo from './OrderInfo'

const OrderButton = ({ order, setOrderData, orderName, selected, user }) => {
    const [showOrders, setShowOrder] = useState(false)
    const [showOrderInfo, setShowOrderInfo] = useState(false)
    const toggleShowOrderInfo = () => { setShowOrderInfo(!showOrderInfo) }
    const toggleShowOrders = () => { setShowOrder(!showOrders) }
    const lastIndexOrderButton = Object.keys(order.active[`${orderName}`]).length - 1






    const orderMap = Object.values(order.active[`${orderName}`]).map((order, index) => {
        const [showOrderInfo, setShowOrderInfo] = useState()
        const toggleShowOrderInfo = () => { setShowOrderInfo(!showOrderInfo) }
        const lastIndex = order.items ? Object.keys(order.items).length - 1 : 0
        const OrderItem = () => {

            return (
                <div className='w-[90%] flex items-center justify-center'>
                    {showOrderInfo && <OrderInfo setOrderData={setOrderData} toggleShowOrderInfo={toggleShowOrderInfo} order={order} orderName={orderName} user={user} />}
                    <div className={`${order.complete ? 'bg-emerald-200 ' : 'bg-slate-200'} ${showOrders ? 'bottom-0 h-20 w-full m-2 ' : ' w-[98%] z-0 bottom-20 h-0'} ${(lastIndexOrderButton == index) ? 'rounded-b-xl md:rounded-b-full' : ''} hover:scale-105  font-semibold text-center  transition-all duration-100 ease-in-out`}>
                        <button onClick={toggleShowOrderInfo} className='w-full h-full flex justify-around p-2'>
                            <h1 className='m-auto w-32 rounded-r-full border-black border text-sm'>{order.OrderNumber}</h1>
                            <h1 className='m-auto w-16 rounded-full border-black border text-sm'>${order.Total}</h1>
                            <h1 className='m-auto w-32 overflow-hidden text-xs'>{order.items ? Object.keys(order.items).map((i, index) => { return (lastIndex == index) ? `${i}` : `${i}, ` }) : []}</h1>
                        </button>
                    </div>
                </div>
            )
        }

        if (!order.complete && selected.Active) {
            return (
                <OrderItem />
            )
        } else if (order.complete && selected.Complete) {
            return (
                <OrderItem />
            )
        }
    })

    const orderTotal = orderMap.filter(item => item !== undefined).length

    return (
        <div className='w-[90%] '>
            <button onClick={toggleShowOrders} className={`z-10 w-full relative my-2 transition-all duration-500 ease-in-out hover:scale-110 `}>
                <div className=' h-20 bg-white shadow-black shadow-sm'>
                    <h1 className='font-bold m-2`'>{`${orderName}`}</h1>
                    <h1 className='font-bold m-2`'>{`${orderTotal} orders`}</h1>
                </div>
            </button>
            <div className={`${showOrders ? 'bottom-0 h-72 w-full bg-slate-100 rounded-b-[3rem]' : ' w-[94%] z-0 bottom-10 relative h-0 m-auto'} ease-in-out duration-700 transition-all overflow-y-scroll overflow-hidden  w-full flex flex-col items-center justify-start`}>
                {showOrders && orderMap}
            </div>
        </div>
    )
}

export default OrderButton