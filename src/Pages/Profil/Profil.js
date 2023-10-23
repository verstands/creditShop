import React from 'react'
import {
    FaUserCircle,
} from 'react-icons/fa';

const Profil = () => {
    return (
        <>
            <div className='pt-[25px]  px-[25px] bg-[#F8F9FC]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal'>Profile</h1>
                </div>
                <div className='grid grid-cols-2 mt-[25px]'>
                    <FaUserCircle className='text-[200px] items-center' />
                </div>
            </div>
        </>
    )
}

export default Profil