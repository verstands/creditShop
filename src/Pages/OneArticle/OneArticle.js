import React, { useEffect, useState } from 'react'
import {
    FaUserCircle,
    FaStar,
    FaShoppingCart,
    FaFacebook,
    FaWhatsapp,
    FaInstagram
} from 'react-icons/fa';
import { getArticleOne } from '../../Apis/Articles';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';


const OneArticle = () => {
    const [articleOne, setarticleOne] = useState([])
    const [loading, setloading] = useState(true)
    const params = useParams();

    useEffect(() => {
        getArticleOne(params.id).then((membre) => {
            setarticleOne(membre);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <div className='pt-[25px]  px-[25px] bg-[#F8F9FC]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal'>Article : {articleOne.article_nom}</h1>
                </div>
                {
                    articleOne && (
                        <div className="md:flex border-black mt-4">
                            <div className="md:w-6/12 bg-white p-10 rounded-sm">
                                <img src="images/images.png" width='350' alt="images" />
                            </div>
                            <div className="md:w-6/12 bg-white p-10 rounded-sm">
                                <div>
                                    <div className=''>
                                        <h2 className='font-bold text-4xl'>
                                            {articleOne.article_nom}
                                        </h2>
                                    </div>
                                    <div className=''>
                                        <h6 className='font-bold text-dark-purple'>
                                            {articleOne.at && articleOne.at.nom_type_a}
                                        </h6>
                                    </div>
                                    <div className='flex items-center gap-1 mt-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar color='red' />
                                        <FaStar color='red' />
                                        <FaStar color='red' />
                                        <p>(9 avis)</p>
                                    </div>
                                    <div className='mb-4'>
                                        <h2 className='font-bold text-4xl'>
                                            {articleOne.article_prix}$
                                        </h2>
                                    </div>
                                    <div className='mb-4'>
                                        <p className=''>
                                            {articleOne.article_description}
                                        </p>
                                    </div>
                                    <div className='mb-4 '>
                                        <div className="flex items-center">
                                            <button
                                                className="px-2 py-1 bg-red-500 text-gray-700 rounded-l-md"

                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                className=" py-1 text-center text-gray-700 bg-gray-200"
                                                value="1"

                                            />
                                            <button
                                                className="px-2 py-1 bg-red-500 text-gray-700 rounded-r-md"

                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className='flex mt-6 items-center justify-center mt-1 bg-green-700 h-[40px] w-[155px] rounded text-white'>
                                            <FaShoppingCart />
                                            <button className=''> Ajouter au panier</button>
                                        </div>
                                        <div className='flex items-center gap-2 mt-9'>
                                            <p className='font-bold '>Partager sur : </p>
                                            <Link><FaFacebook /></Link>
                                            <Link><FaWhatsapp /></Link>
                                            <Link><FaInstagram /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {loading && <Spinner />}
            </div>
        </>
    )
}

export default OneArticle