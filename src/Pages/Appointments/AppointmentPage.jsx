import React, { useState } from 'react'
import AviabilityPage from '../../Componets/AMComponets/AviabilityPage'
function AppointmentPage({ UserID, userData }) {
  const [showAviablility, setShowAviablility] = useState(true)
  const toggleAviability = () => { setShowAviablility(!showAviablility)}




function Appointments(){

  
 

  return(
    <div className=''>
      <h1 className=' top-7 relative text-xl font-bold text-center'>Client Name</h1>
      <div className='flex w-[98%] h-24 bg-slate-200 m-auto rounded-xl'>
      <div className='mt-3 flex-grow flex justify-around border-l-pink-500 h-full'>
        <div className='border h-fit m-auto'>
        <h1 className='text-center m-auto text-lg font-bold'>phone</h1>
        <h1 className='text-center m-auto text-lg font-bold'>price</h1>
        </div>
        <h1 className='text-center m-auto font-bold text-lg'>Date</h1>
        <h1 className='text-center m-auto font-bold text-lg'>Time</h1>

      </div>
      {<button className='font-bold text-3xl w-[20%] h-full bg-rose-600 rounded-r-xl'>
        X
      </button>}
      </div>
    </div>
  )
}





  return (
    <div className='absolute z-0 h-screen w-screen bg-gradient-to-br from-slate-800 to-slate-900 overflow-y-scroll'>
      {showAviablility && <AviabilityPage UserID={UserID} userData={userData}  toggleAviability={toggleAviability}/>}
      <div className='bg-slate-700 h-40 relative rounded-b-3xl shadow-black shadow-lg'>
        <h1 className='text-rose-500 font-bold text-5xl relative top-16 text-center'  >Appointments</h1>
      </div>
      <div className='w-full flex justify-center'>
      <button onClick={toggleAviability} className='shadow-2xl shadow-slate-900 rounded-full h-12 w-[96%] bg-white my-4'>
        <h1 className='font-bold text-lg'>Availability</h1>
      </button>
      </div>
        <div className='h-[30rem] lg:w-[60%] lg:m-auto p-4 bg-slate-500 overflow-y-scroll'>
          <Appointments/>
          <Appointments/>
          <Appointments/>
          <Appointments/>
          <Appointments/>
          <Appointments/>
      </div>
      <div className='h-20 flex justify-center'>
        <button className='h-16 w-3/4 m-auto bg-rose-600 rounded-full'>
          <h1 className='text-2xl font-bold'>Remove</h1>
        </button>
      </div>
    </div>
  )
}

export default AppointmentPage