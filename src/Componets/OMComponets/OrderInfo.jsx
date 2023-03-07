import React from 'react'
import { MarkOrder } from '../../MyCodes/ed5'

const OrderInfo = ({ toggleShowOrderInfo, order, setOrderData, orderName, user }) => {
    console.log(user)
    function mark() {
        MarkOrder(orderName, order.OrderNumber, setOrderData, user)
        toggleShowOrderInfo()
    }
    return (
        <div className="fixed top-0 left-0 flex w-full h-full z-40 m-auto border border-red-900">
            <div className='overflow-y-scroll w-fit p-10 h-[36rem] bg-pink-100 z-20 shadow-black shadow m-auto rounded-xl relative'>
                <div>
                    <h1>{order.OrderNumber}</h1>
                    <h1>Total Price: {order.Total}</h1>
                </div>
                <div className='flex flex-col items-center justify-start'>
                    <h1 className='font-bold text-2xl'>Items</h1>
                    <div>
                        {order.items ?
                            Object.values(order.items).map((item) => {
                                return (
                                    <div>
                                        <div className='flex justify-around bg-sky-200 rounded-t-full mt-4'>
                                            <div className='flex'>
                                                <h1 className='font-bold text-slate-800'>Name: </h1>
                                                <h1 className='m-auto text-sm text-slate-800'>{item.name}</h1>
                                            </div>
                                            <div className="flex ">
                                                <h1 className='font-bold text-slate-800'>Price: </h1>
                                                <h1 className='m-auto text-sm text-slate-800'>${item.price}</h1>
                                            </div>
                                        </div>
                                        <img className='rounded-b-3xl w-full h-72' src={item.img} alt="img" />
                                    </div>
                                )
                            }) : []
                        }
                    </div>
                </div>
                <div className='sticky bottom-0 left-0 flex shadow-black shadow rounded-full justify-between w-72  bg-slate-100'>
                    <button onClick={mark} className='sticky bottom-0 m-4 left-0 w-32 h-12 bg-emerald-300 rounded-xl'>{`${!order.complete ? 'Complete' : 'Uncomplete'}`}</button>
                    <button onClick={toggleShowOrderInfo} className='sticky bottom-0 m-4 left-0 w-32 h-12 bg-rose-400 rounded-xl'>Close</button>

                </div>

            </div>
        </div>

    )
}

export default OrderInfo




