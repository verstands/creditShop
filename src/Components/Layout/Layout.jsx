import React from 'react'
import { FaEnvelope, FaRegBell, FaSearch, FaUser, FaUserCircle } from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar'
import Otbar from '../Otbar/Otbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    {window.innerWidth > 640 && (
      <div className='flex'>
        <div className="md:basis-[20%] md:h-[100vh]">
          <Sidebar />
        </div>
        <div className='md:basis-[80%] border'>
          <Otbar />
          <Outlet />
        </div>
      </div>
    )}
    {window.innerWidth <= 640 && (
      <>
        <div className='basis-[100%] h-[100vh]'>
          <Otbar />
          <Outlet />
        </div>
      </>
    )}
  </>
  )
}

export default Layout