import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Otbar from '../Otbar/Otbar'


const Layout = () => {
  return (
    <>
        <div className='flex'>
            <div className='basis-[12%] h-[100vh]'>
                <Sidebar />
            </div>
            <div className='basis-[88%] border'>
                <Otbar />
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Layout