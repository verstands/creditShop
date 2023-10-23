import React, { useState } from 'react'
import {
    FaSearch,
    FaRegBell,
    FaEnvelope,
    FaUserCircle,
    FaSignOutAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Otbar = () => {

    const [open, setOpen] = useState(false)

    const showDropDown = () => {
        setOpen(!open)
    }
    return (
        <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
            <div className='flex items-center rounded-[5px]'>
                <input type="text" className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search...' />
                <div className='bg-dark-purple h-[40px] flex items-center justify-center px-[14px] rounded-tr-[5px] rounded-br-[5px]'>
                    <FaSearch color='white' />
                </div>
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <div className='flex items-center border-r-[1px] pr-[25px] gap-[25px]'>
                    <FaRegBell />
                    <FaEnvelope />
                </div>
                <div className='flex items-center gap-[15px] relative' onClick={showDropDown}>
                    <p>Rabby Kkwele</p>
                    <div className='h-[50px] w-[50px] bg-dark-purple rounded-full flex items-center justify-center cursor-pointer' >
                        <FaUserCircle className='text-[40px]' />
                    </div>
                    {
                        open &&
                        <div className="bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 rigth-0 pt-[15px] pl-[15px]">
                            <p className='flex gap-3'> 
                              
                                <Link to="" className='hover:text-dark-purple font-semibold'>Profile</Link>
                            </p>
                            <p className='flex gap-3'>
                              
                                <Link to="" className='hover:text-dark-purple font-semibold'>Parametre</Link>
                            </p>
                            <p className='flex gap-3'>
                         
                                <Link to="" className='hover:text-dark-purple font-semibold'>Se deconnecter</Link>
                            </p>
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default Otbar