import React from 'react'
import { FaEnvelope, FaRegBell, FaSearch, FaUser, FaUserCircle } from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar'
import Otbar from '../Otbar/Otbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex'>
        <div className="basis-[20%] h-[100vh]">
           <Sidebar />
        </div>
        <div className='basis-[80%] border'>
            <Otbar />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout