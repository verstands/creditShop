import React, { useEffect, useState } from 'react'
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,

} from "@material-tailwind/react";

import {
  FaTachometerAlt,
  FaMoneyBill
} from 'react-icons/fa';
import TablePaiement from '../../Components/TablePaiement/TablePaiement';
import { getPaiement } from '../../Apis/PaiiementApi';
import Spinner from '../../Components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
const Paiement = () => {
  const TABLE_HEAD = ["Montant", "Devise", "Date", ""];
  const [getPaiements, setgetPaiements] = useState([]);
  const [loading, setloading] = useState(true);
  let token = `Bearer ${localStorage.getItem("token")}`;
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/login');
    }
  }, [navigate]);
  
  const [messageA, setmessageA] = useState("")
  useEffect(() => {
    getPaiement().then((membre) => {
      setgetPaiements(membre);
      setloading(false)
      setmessageA("Aucun paiement disponible")
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const PayerClick = (e) => {
    e.preventDefault()
    navigate('/PaiementFormulaire')
  }
  return (
    <>
      <div className='pt-[25px]  px-[25px] bg-[#F8F9FC]'>
        <div>
          <Card className="h-full w-full overflow-scroll">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div className='flex'>
                  <div className='px-5 flex items-center'>
                    <FaMoneyBill className='' />
                    <div className='ml-10'>
                      <Typography variant="h5" color="blue-gray">
                        Paiement
                      </Typography>
                      <Typography variant="h9">
                        Liste des paiements
                      </Typography>
                      <Typography variant="h9">
                        <button onClick={PayerClick} type="submit" class="w-full text-white bg-primary-600 bg-dark-purple hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          <div class="flex items-center justify-center">
                            <span class="text-center">Payer</span>
                          </div>
                        </button>
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            {getPaiements.length > 0 ? (
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <TablePaiement TABLE_ROWS={getPaiements} />
                </tbody>
              </table>
            ) : (
              <p className="text-center text-red-500 font-bold mt-10">{setmessageA}</p>
            )}
            {loading && (
              <Spinner />
            )}
          </Card>
        </div>
      </div>
    </>
  )
}

export default Paiement