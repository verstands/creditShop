import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaUserCircle,
    FaShoppingCart,
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { getArticle } from '../../Apis/Articles';
import Spinner from '../../Components/Spinner/Spinner';

const Articles = () => {
    const [getarticles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const params = useParams();


    useEffect(() => {
        getArticle(params.id).then((membre) => {
            setarticles(membre);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const OnPanier = (id) => {
        alert(id)
    }
    return (
        <>
            <div className='pt-[25px] px-[25px] bg-[#dfe1e3]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[rgb(90,92,105)] text-[28px] leading-[34px] font-normal'>
                        Les articles
                    </h1>
                    <div>
                        <div>
                            <input type="text" name="password" id="password" placeholder="Recherche un article" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                    </div>
                </div>
                {loading && <Spinner />}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-[25px]' >
                    {
                        getarticles && getarticles.map((ats) => {
                            return (
                                <Link to='/onearticle'>
                                    <div className='h-[200px] w-[300px] mt-[5px] rounded-[8px] bg-white border-[2px] border-dark-purple justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                                    </div>
                                    <h3 className='font-bold'>{ats.article_nom}</h3>
                                    <p>{ats.article_description}</p>
                                    <div className='flex items-center justify-between'>
                                        <div className='font-bold text-red-600'>{ats.article_prix}$</div>
                                        <div className='flex items-center justify-center mt-1 bg-green-700 h-[40px] w-[155px] rounded text-white'>
                                            <FaShoppingCart />
                                            <button className='' onClick={() => OnPanier(ats.articles_id)}> Ajouter au panier</button>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default Articles