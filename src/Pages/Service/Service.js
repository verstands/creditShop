import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <>
      <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[rgb(90,92,105)] text-[28px] leading-[34px] font-normal'>
            Les services
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-[25px]'>
          <Link>
            <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam officiis facilis voluptatibus asperiores culpa consequuntur architecto porro sapiente, iste magnam! Veritatis, natus fuga. Ex, molestias. Expedita dolore rem dignissimos!
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