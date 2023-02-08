import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <div className='absolute flex bg-slate-900 w-screen h-screen z-0'>
      <div className='border-4 rounded-full w-full h-40 m-auto p-6'>
        <h1 className='text-3xl font-bold text-center text-white'>Welcome to your admin panel by ED5!</h1>
        <h1 className='text-5xl text-center font-bold'>😋</h1>
      </div>
    </div>
    <App />
  </React.StrictMode>,
)
