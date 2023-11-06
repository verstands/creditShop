import React, { useEffect, useState } from 'react';
import {
  FaSearch,
  FaRegBell,
  FaEnvelope,
  FaUserCircle,
  FaBars,
  FaSignOutAlt,
  FaUser,
  FaMoneyBill,
  FaCreditCard,
  FaShoppingCart,
  FaTachometerAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getPanierCount } from '../../Apis/PanierApi';
import { getProfil } from '../../Apis/Profile';

const Otbar = () => {
  const [open, setOpen] = useState(false);
  const [openBtnDwn, setOpenBtnDwn] = useState(false);
  const [panier, setPanier] = useState([]);
  const [nombreProduits, setNombreProduits] = useState(0);
  const [sommeTotale, setSommeTotale] = useState(0);
  const [profil, setProfil] = useState([]);
  let token = `Bearer ${localStorage.getItem("token")}`;


  const showDropDown = () => {
    setOpen(!open);
  };

  const showBtnDropDown = () => {
    setOpenBtnDwn(!openBtnDwn);
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('panier'));
    if (savedCart) {
      setPanier(savedCart);
      setNombreProduits(savedCart.length);

      const total = savedCart.reduce((acc, item) => acc + item.total, 0);
      setSommeTotale(total);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(panier));
    setNombreProduits(panier.length);
    const total = panier.reduce((acc, item) => acc + item.total, 0);
    setSommeTotale(total);
  }, [panier]);

  useEffect(() => {
    getProfil().then((membre) => {
      setProfil(membre);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>

        {
          window.innerWidth > 640 && (
            <div className='flex items-center rounded-[5px]'>
              <div className='bg-red-500 h-8 w-8 flex justify-center rounded gap-[20px]'>
                <button>
                  <FaBars />
                </button>
              </div>
            </div>
          )
        }
        <div className='flex items-center justify-between gap-[15px] relative'>
  <div className='flex items-center border-r-[1px] pr-[25px] gap-[25px]'>
    <FaEnvelope size={30} />
    <div className='flex items-center'>
      <Link to='/detailpanier'>
        <FaShoppingCart size={30} className='mr-2' />
      </Link>
      <Link to='/detailpanier'>
        {/* Autre contenu ici */}
      </Link>
    </div>
  </div>
  <div>
    
  </div>
  <div className='flex items-center gap-[15px] relative' onClick={showDropDown}>
    {open && localStorage.getItem("token") && (
      <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px]'>
        <p className='flex gap-3'>
          <Link to='/profil' className='hover:text-dark-purple font-semibold'>
            Profile
          </Link>
        </p>
        <p className='flex gap-3'>
          <Link to='/parametre' className='hover:text-dark-purple font-semibold'>
            Parametre
          </Link>
        </p>
        <p className='flex gap-3'>
          <Link to='/Deconnexion' className='hover:text-dark-purple font-semibold'>
            Se deconnecter
          </Link>
        </p>
      </div>
    )}
    <div className='flex justify-end cursor-pointer'>
      <FaUserCircle className='text-[40px]' />
    </div>
  </div>
</div>
      </div>

    </>
  );
};

export default Otbar;