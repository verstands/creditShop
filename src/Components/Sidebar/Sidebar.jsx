import React from 'react'
import {
    FaTachometerAlt,
    FaRegSun,
    FaChevronRight,
    FaWrench,
    FaStickyNote,
    FaRegChartBar,
    FaRegCalendarAlt,
    FaChevronLeft,
    FaBolt
} from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className='bg-[#4E73DF] h-screen px-[15px]'>
            <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
                <h1 className='text-white text-[17px] leading-[24px] font-extrabold cursor-pointer'>Admin panel</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <FaTachometerAlt color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboad</p>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px]'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white' />
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Page</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px]'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegChartBar color='white' />
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Chart</p>
                    </div>
                </div>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>ADOONS</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px]'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='white' />
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Composant</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px]'>
                    <div className='flex items-center gap-[10px]'>
                        <FaWrench color='white' />
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Parametre</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px]'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegCalendarAlt color='white' />
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center pt-[15px]'>
                <div className='h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center'>
                    <FaChevronLeft color='white' />
                </div>
            </div>
            <div className='flex items-center justify-center bg-[#395CBF] mt-[10px] flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
                <FaBolt  color='white'/>
                <p className='text-white/[0.4] text-center text-[12px] leading-[18px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, maiores.</p>
                <button className='text-[14px] leading-[21px] font-normal bg-[#17A673] text-white flex items-center justify-center h-[30px] w-full rounded-[3px]'>Upgrade to Pro</button>
            </div>
        </div>
    )
}

export default Sidebar