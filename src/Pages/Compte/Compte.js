import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    FaShoppingCart,
    FaUserCircle,
    FaCreditCard,
    FaUserPlus,
    FaMoneyCheck,
    FaRegCreditCard,
    FaTachometerAlt,
    FaDollarSign
} from 'react-icons/fa';
import { getSommePayer, getcountMonCompte, getcountMonCompteProduit } from '../../Apis/CountApi';

const Compte = () => {

    const [commade, setcommade] = useState(0)
    const [commadeProduit, setcommadeProduit] = useState(0)
    const navigate = useNavigate();

    if (!localStorage.getItem("token")) {
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
    const [Sommepayer, setSommepayer] = useState(0)
   
    useEffect(() => {
        getSommePayer().then((membre) => {
            setSommepayer(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    const [Reste, setReste] = useState(0)
    const calculeReste = parseInt(commade) - parseInt(Sommepayer)
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div className='grid grid-cols-2 xs:grid-cols-2 p-[20px] gap-[30px] mt-[25px] pb-[15px]'>
                <Link to='/Produits'>
                    <div className='h-[150px] rounded-[8px] bg-red-800  border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaShoppingCart className='text-white' size={50} /></center>
                            <p className='text-[16px] font-bold text-white'>Nombre de commades</p>
                            <p className='text-[16px] font-bold text-white'>{commadeProduit}</p>
                        </div>
                    </div>
                </Link>
                <Link to='/MonCompte'>
                    <div className='h-[150px] rounded-[8px] bg-red-800  border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaMoneyCheck className='text-white' size={50} /></center>
                            <p className='text-[16px] font-bold text-white'>Prix produit </p>
                            <p className='text-[16px] font-bold text-white'>{commade}$</p>
                        </div>
                    </div>
                </Link>
                <Link to=''>
                    <div className='h-[150px] rounded-[8px] bg-red-800  border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaMoneyCheck className='text-white' size={50} /></center>
                            <p className='text-[16px] font-bold text-white'>Montant déjà payé </p>
                            <p className='text-[16px] font-bold text-white'>{Sommepayer}$</p>
                        </div>
                    </div>
                </Link>
                <Link to=''>
                    <div className='h-[150px] rounded-[8px] bg-red-800  border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaMoneyCheck className='text-white' size={50} /></center>
                            <p className='text-[16px] font-bold text-white'>Reste à payer </p>
                            <p className='text-[16px] font-bold text-white'>{calculeReste}$</p>
                        </div>
                    </div>
                </Link>
                <Link to='/paiements'>
                    <div className='h-[150px] rounded-[8px] bg-red-800  border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaCreditCard className='text-white' size={50} /></center>
                            <p className='text-[16px] font-bold text-white'>Paiement d'un compte</p>
                        </div>
                    </div>
                </Link>
                <Link to='/achatcredit'>
                    <div className='h-[150px] rounded-[8px] bg-red-800  border-[2px] border-dark-purple hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-center'>
                        <div className='text-center'>
                            <center> <FaRegCreditCard className='text-white' size={50} /></center>
                            <p className='text-[16px] font-bold text-white'>Achat credit</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Compte