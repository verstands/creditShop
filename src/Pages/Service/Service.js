import React from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
    return (
        <>
            <div className='pt-[25px]  px-[25px] bg-[#F8F9FC]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal'>Les services</h1>
                </div>
                <div className='grid grid-cols-3 mt-[25px]'>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px]  rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>

                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px]   rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>

                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px]  rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>

                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px]  rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>

                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px]  rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>

                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px]  rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>

                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Service