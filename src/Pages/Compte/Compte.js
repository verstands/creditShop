import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    FaShoppingCart,
    FaUserCircle,
    FaCreditCard,
    FaUserPlus,
    FaMoneyCheck,
    FaRegCreditCard
} from 'react-icons/fa';
import { getcountMonCompte, getcountMonCompteProduit } from '../../Apis/CountApi';

const Compte = () => {

    const [commade, setcommade] = useState(0)
    const [commadeProduit, setcommadeProduit] = useState(0)
    const navigate = useNavigate();

    if(!localStorage.getItem("token")){
        navigate('/login')
      }

    useEffect(() => {
        getcountMonCompte().then((membre) => {
            setcommade(membre);
        }).catch((error) => {
          console.log(error);
        });
      }, []);

      useEffect(() => {
        getcountMonCompteProduit().then((membre) => {
            setcommadeProduit(membre);
        }).catch((error) => {
          console.log(error);
        });
      }, []);

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div className='grid grid-cols-2 xs:grid-cols-2 p-[20px] gap-[30px] mt-[25px] pb-[15px]'>
                <Link to='/Produits'>
                    <div className='h-[150px] rounded-[8px] bg-white border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaShoppingCart size={50} /></center>
                            <p className='text-[16px] font-bold'>Nombre de commades</p>
                            <p className='text-[16px] font-bold'>{commadeProduit}</p>
                        </div>
                    </div>
                </Link>
                <Link to='/MonCompte'>
                    <div className='h-[150px] rounded-[8px] bg-white border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaMoneyCheck size={50} /></center>
                            <p className='text-[16px] font-bold'>Montant total produit</p>
                            <p className='text-[16px] font-bold'>{commade}$</p>
                        </div>
                    </div>
                </Link>
                <Link to='/paiements'>
                    <div className='h-[150px] rounded-[8px] bg-white border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaCreditCard size={50} /></center>
                            <p className='text-[16px] font-bold'>Paiement d'un compte</p>
                        </div>
                    </div>
                </Link>
                <Link to='/achatcredit'>
                    <div className='h-[150px] rounded-[8px] bg-white border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaRegCreditCard size={50} /></center>
                            <p className='text-[16px] font-bold'>Achat credit</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Compte