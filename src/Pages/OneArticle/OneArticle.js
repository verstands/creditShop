import React from 'react'
import {
    FaUserCircle,
    FaEdit
} from 'react-icons/fa';
const OneArticle = () => {
    return (
        <>
            <div className='pt-[25px]  px-[25px] bg-[#F8F9FC]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal'>Article : xxxxxx</h1>
                </div>
                <div className="md:flex border-black mt-4">
                    <div className="md:w-6/12">
                        <img src="images/images.png" width='350' alt="images" />
                    </div>
                    <div className="md:w-6/12">
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
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneArticle