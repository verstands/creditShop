import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaUserCircle,
    FaShoppingCart,
} from 'react-icons/fa';
const Articles = () => {
    return (

        <>
            <div className='pt-[25px] px-[25px] bg-[#dfe1e3]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[rgb(90,92,105)] text-[28px] leading-[34px] font-normal'>
                        Les articles
                    </h1>
                    <div>
                        <div>
                            <input type="password" name="password" id="password" placeholder="Recherche un article" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-[25px]'>
                    <Link to='/onearticle'>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                        </div>
                        <h3 className='font-bold'>ssssssss</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                        <div className='flex items-center justify-between'>
                            <div className='font-bold text-red-600'>12$</div>
                            <div className='flex items-center justify-center mt-1 bg-green-700 h-[40px] w-[155px] rounded text-white'>
                                <FaShoppingCart />
                                <button className=''> Ajouter au panier</button>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                        </div>
                        <h3 className='font-bold'>ssssssss</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                        <div className='flex items-center justify-between'>
                            <div className='font-bold text-red-600'>12$</div>
                            <div className='flex items-center justify-center mt-1 bg-green-700 h-[40px] w-[155px] rounded text-white'>
                                <FaShoppingCart />
                                <button className=''> Ajouter au panier</button>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                        </div>
                        <h3 className='font-bold'>ssssssss</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                        <div className='flex items-center justify-between'>
                            <div className='font-bold text-red-600'>12$</div>
                            <div className='flex items-center justify-center mt-1 bg-green-700 h-[40px] w-[155px] rounded text-white'>
                                <FaShoppingCart />
                                <button className=''> Ajouter au panier</button>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                        </div>
                        <h3 className='font-bold'>ssssssss</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                        <div className='flex items-center justify-between'>
                            <div className='font-bold text-red-600'>12$</div>
                            <div className='flex items-center justify-center mt-1 bg-green-700 h-[40px] w-[155px] rounded text-white'>
                                <FaShoppingCart />
                                <button className=''> Ajouter au panier</button>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                        </div>
                        <h3 className='font-bold'>ssssssss</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                        <div className='flex items-center justify-between'>
                            <div className='font-bold text-red-600'>12$</div>
                            <div className='flex items-center justify-center mt-1 bg-green-700 h-[40px] w-[155px] rounded text-white'>
                                <FaShoppingCart />
                                <button className=''> Ajouter au panier</button>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                        </div>
                        <h3 className='font-bold'>ssssssss</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore?</p>
                        <div className='flex items-center justify-between'>
                            <div className='font-bold text-red-600'>12$</div>
                            <div className='flex items-center justify-center mt-1 bg-green-700 h-[40px] w-[155px] rounded text-white'>
                                <FaShoppingCart />
                                <button className=''> Ajouter au panier</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    );
}

export default Articles