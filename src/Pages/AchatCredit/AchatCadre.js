import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaShoppingCart,
    FaUserCircle,
    FaCreditCard,
    FaUserPlus,
    FaStore,
    FaPhone,
    FaGlassMartini,
    FaUtensils,
    FaTaxi,
    FaGasPump,
    FaHotel
} from 'react-icons/fa';

const AchatCadre = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className='grid grid-cols-2 xs:grid-cols-2 p-[20px] gap-[30px] mt-[25px] pb-[15px]'>
            <Link to='/achatformulaire'>
                <div className='h-[150px] rounded-[8px] bg-red-800 border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                    <div className='text-center'>
                        <center> <FaPhone size={50} color='white' /></center>
                        <p className='text-[16px] font-bold text-white' >Cabne telephone</p>
                    </div>
                </div>
            </Link>
            <Link to='/achatformulaire'>
                <div className='h-[150px] rounded-[8px] bg-red-800 border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                    <div className='text-center'>
                        <center> <FaGlassMartini size={50} color='white' /></center>
                        <p className='text-[16px] font-bold text-white' >Terrasse-Bar</p>
                    </div>
                </div>
            </Link>
            <Link to='/achatformulaire'>
                <div className='h-[150px] rounded-[8px] bg-red-800 border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                    <div className='text-center'>
                        <center> <FaUtensils size={50} color='white' /></center>
                        <p className='text-[16px] font-bold text-white' >Restaurant</p>
                    </div>
                </div>
            </Link>
            <Link to='/achatformulaire'>
                <div className='h-[150px] rounded-[8px] bg-red-800 border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                    <div className='text-center'>
                        <center> <FaStore size={50} color='white' /></center>
                        <p className='text-[16px] font-bold text-white' >Boutique</p>
                    </div>
                </div>
            </Link>
            <Link to='/achatformulaire'>
                <div className='h-[150px] rounded-[8px] bg-red-800 border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                    <div className='text-center'>
                        <center> <FaTaxi size={50} color='white' /></center>
                        <p className='text-[16px] font-bold text-white' >Taxi</p>
                    </div>
                </div>
            </Link>
            <Link to='/achatformulaire'>
                <div className='h-[150px] rounded-[8px] bg-red-800 border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                    <div className='text-center'>
                        <center> <FaGasPump size={50} color='white' /></center>
                        <p className='text-[16px] font-bold text-white' >Station Essence</p>
                    </div>
                </div>
            </Link>
            <Link to='/achatformulaire'>
                <div className='h-[150px] rounded-[8px] bg-red-800 border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                    <div className='text-center'>
                        <center> <FaHotel size={50} color='white' /></center>
                        <p className='text-[16px] font-bold text-white' >Hotel</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default AchatCadre;