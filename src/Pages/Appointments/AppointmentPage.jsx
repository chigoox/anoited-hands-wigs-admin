import React, { useEffect, useState } from 'react'
import AviabilityPage from '../../Componets/AMComponets/AviabilityPage'
import { fetchAppointments, deleteAppointment } from '../../MyCodes/ed5'
function AppointmentPage({ UserID, userData }) {
  const [showAviablility, setShowAviablility] = useState(false)
  const [appointments, setAppointments] = useState()
  const [reRender, setReRender] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const toggleShowDelete = () => { setShowDelete(!showDelete) }
  const toggleAviability = () => { setShowAviablility(!showAviablility) }
  const toggleRerender = () => { setReRender(!reRender) }





  function _deleteAppointment(appointment, date) {
    deleteAppointment(appointment, date, setAppointments)

  }

  useEffect(() => {
    fetchAppointments(setAppointments)
  }, [reRender, showDelete])




  function Appointments({ name, phone, price, time, date }) {
    return (
      <div className=''>
        <h1 className=' top-7 relative text-xl font-bold text-center'>{name}</h1>
        <div className='flex w-[98%] h-32 bg-slate-200 m-auto rounded-xl'>
          <div className='mt-3 flex-grow flex justify-around border-l-pink-500 h-full'>
            <div className='p-8 h-fit m-auto w-full'>
              <div className='flex justify-between'>
                <h1 className='text-md font-bold'>Price:</h1>
                <h1 className='text-md font-bold'>{price}</h1>
              </div>
              <div className='flex justify-between'>
                <h1 className='font-bold text-md'>Time:</h1>
                <h1 className='font-bold text-md'>{time}</h1>
              </div>
              <div className='flex justify-between'>
                <h1 className='text-md font-bold'>Phone:</h1>
                <h1 className='text-md font-bold'>{phone}</h1>
              </div>
            </div>
          </div>
          {showDelete && <button onClick={() => { _deleteAppointment(`${date}.${time}`, date); toggleRerender() }} className='font-bold text-3xl w-[20%] h-full bg-rose-600 rounded-r-xl'>
            X
          </button>}
        </div>
      </div>
    )
  }

  function AppointmentsDate({ date }) {
    return (
      <div className='h-96 overflow-y-scroll border-2 border-black mt-4'>
        <h1 className=' top-7 relative text-xl font-bold text-center'>{date}</h1>
        {
          (appointments) ? Object.values(appointments[date]).map((apt) => {
            return <Appointments key={apt.timeString} name={apt.name} price={apt.price} phone={apt.phone} time={apt.timeString} date={date} />
          }) : ''
        }


      </div>
    )
  }



  return (
    <div className='absolute z-0 h-screen w-screen bg-gradient-to-br from-slate-800 to-slate-900 overflow-y-scroll'>
      {showAviablility && <AviabilityPage UserID={UserID} userData={userData} toggleAviability={toggleAviability} />}
      <div className='bg-slate-700 h-40 relative rounded-b-3xl shadow-black shadow-lg'>
        <h1 className='text-rose-500 font-bold text-5xl relative top-16 text-center'  >Appointments</h1>
      </div>
      <div className='w-full flex justify-center'>
        <button onClick={toggleAviability} className='hover:bg-sky-300 transition-all duration-700 ease-out shadow-2xl shadow-slate-900 rounded-full h-12 w-[96%] bg-white my-4'>
          <h1 className='font-bold text-lg'>Availability</h1>
        </button>
      </div>
      <div className='h-[30rem] lg:w-[60%] lg:m-auto p-4 bg-slate-500 overflow-y-scroll'>
        {/*  */}
        {
          (appointments) ? Object.keys(appointments).map((date) => {
            return <AppointmentsDate key={date} date={date} />
          }) : ''
        }



      </div>
      <div className='h-20 flex justify-center'>
        <button onClick={toggleShowDelete} className='hover:bg-rose-700 hover:scale-105 transition-all duration-500 h-16 w-3/4 m-auto bg-rose-600 rounded-full'>
          <h1 className='text-2xl font-bold'>Remove</h1>
        </button>
      </div>
    </div>
  )
}

export default AppointmentPage