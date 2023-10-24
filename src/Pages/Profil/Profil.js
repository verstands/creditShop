import React from 'react'
import {
    FaUserCircle,
    FaEdit
} from 'react-icons/fa';
import { Button } from "@material-tailwind/react";

const Profil = () => {
    return (
        <>
            <div className='pt-[25px]  px-[25px] bg-[#F8F9FC]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal'>Profile</h1>
                </div>
                <div className="md:flex border-black mt-4">
                    <div className="md:w-8/12">
                        <div>
                            <div className='grid grid-cols-2  border-b'>
                                <p>Nom : <span className='pl-5 font-bold'>Kiweke</span></p>
                                <p className='md:pl-10'>Postnom : <span className='pl-5 font-bold'>Mbamu</span></p>
                            </div>
                            <div className='grid grid-cols-2  border-b mt-10'>
                                <p>Telephone : <span className='pl-5 font-bold'>Kiweke</span></p>
                                <p className='md:pl-10'>Prenom : <span className='pl-5 font-bold'>Mbamu</span></p>
                            </div>
                            <div className='grid grid-cols-2  border-b mt-10'>
                                <p>Commune : <span className='pl-5 font-bold'>Kalamu</span></p>
                                <p className='md:pl-10'>Province : <span className='pl-5 font-bold'>Mbamu</span></p>
                            </div>
                            <div className='grid grid-cols-2  border-b mt-10'>
                                <p>Mot de passe : <span className='pl-5 font-bold'>xxxxxxxxx</span></p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-10 bg-green-700 h-[40px] w-[90px] rounded text-white'>
                            <FaEdit />
                            <button className=''> Modifier</button>
                        </div>
                    </div>
                    {
                        window.innerWidth > 640 && (
                            <div className="w-4/12">
                                <img src="images/images.png" width='350' alt="images" />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Profil