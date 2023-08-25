import React from 'react'
import { FaEnvelope, FaRegBell, FaSearch, FaUser, FaUserCircle } from 'react-icons/fa'

const Otbar = () => {
  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
        <div className='flex items-center rounded-[5px]'>
            <input type="text" className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search...' />
            <div className='bg-[#4E73DF] h-[40px] flex items-center justify-center px-[14px] rounded-tr-[5px] rounded-br-[5px]'>
                <FaSearch color='white' />
            </div>
        </div>
        <div className='flex items-center gap-[15px] relative'>
            <div className='flex items-center border-r-[1px] pr-[25px] gap-[25px]'>
                <FaRegBell />
                <FaEnvelope />
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <p>Doublas MrGee</p>
                <div className='h-[50px] w-[50px] bg-[#4E73DF] rounded-full flex items-center justify-center cursor-pointer' >
                    <FaUserCircle className='text-[40px]' />
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Otbar