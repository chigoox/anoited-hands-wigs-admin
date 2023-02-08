import React from 'react'



function Uploading({per, setUpload}) {
    if( per == 100) {
        setUpload(0) 
    }

  return (<div>
    { <div className='fixed z-30 top-0 left-0  h-full w-full'>
          <div className='relative z-40 bg-blue-500 top-[40%]'>
            <h1 className='text-center blur-0 text-2xl font-bold'> Uploading: {Math.round(Number(per))}%</h1>
          </div>
        </div>}
  </div>
        
  )
}

export default Uploading