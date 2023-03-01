import React, { useEffect, useState } from 'react'

function SideBar({ currentPage }) {
  const [showMenu, setShowMenu] = useState(false)
  const toggleShowMenu = () => { setShowMenu(!showMenu) }
  const sideBarOptions = ['Products', 'Orders', 'Appointments', 'Logout']
  const [selected, setSelected] = useState(sideBarOptions.map((item) => {
    return { [item]: false }
  }))

  useEffect(() => {
    currentPage(selected)
  }, [selected])



  const SideBarOptionsMap = sideBarOptions.map((item) => {

    const onclick = (fun) => {
      setSelected((old) => {
        Object.keys(old).forEach((key, index) => { old[key] = false })
        toggleShowMenu()
        return { ...old, [item]: true }
      })
    }

    return (
      <button name={item} key={item} onClick={onclick} className={`transition-all h-12 w-[95%] my-4 ${selected[item] ? 'bg-rose-500 m-3' : 'bg-rose-700'} hover:scale-105 hover:bg-sky-300 relative  transition-all duration-700 ease-in-out  rounded-full p-2`}>
        <h1 className={`transition-all font-bold text-slate-900 text-2xl ${selected[item] ? 'text-center' : 'text-justify '}`}>{item}</h1>
      </button>
    )
  })


  return (
    <div className={`${showMenu ? 'w-screen h-full' : ''} absolute  flex z-10`}>
      <div className={`transition-all ${showMenu ? 'w-[60%] lg:w-[20%] p-2' : 'w-[0%]'} hover:bg-slate-900 bg-slate-800 h-full rounded-r-2xl duration-150 relative flex flex-col justify-center border-r-rose-500 border-r-4`}>
        {showMenu && SideBarOptionsMap}
        <button onClick={toggleShowMenu} className={`absolute hover:bg-rose-700 bg-slate-900 h-12 w-12 transition-all mt-4 top-0 m-4 ${showMenu ? 'right-0' : 'left-0'} border-2 border-rose-700 duration-25 rounded-xl hover:scale-110 transition-all duration-700 ease-in-out`}></button>
      </div>
    </div>

  )
}

export default SideBar