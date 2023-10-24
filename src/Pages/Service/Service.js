import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <>
            <div className='pt-[25px] px-[25px] bg-[#dfe1e3]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[rgb(90,92,105)] text-[28px] leading-[34px] font-normal'>
                        Les services
                    </h1>
                    <div>
                        <div>
                            <input type="text" name="password" id="password" placeholder="Recherche service" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-[25px]'>
                    <Link to='/articles'>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between  hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between  hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between  hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between  hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple flex justify-between  hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Service;