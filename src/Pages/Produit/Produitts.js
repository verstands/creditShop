import React, { useEffect, useState } from 'react'
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import {
    FaCreditCard,
    FaShoppingCart
} from 'react-icons/fa';
import { getAchatCredit, getAchatCreditCount } from '../../Apis/AchatCreditApi';
import TableAchatCredit from '../../Components/TableAchatCredit/TableAchatCredit';
import { useNavigate } from 'react-router-dom';
import { getProduits } from '../../Apis/Produits';
import TableProduit from '../../Components/TableauPoduits/TableauProduit';
import Spinner from '../../Components/Spinner/Spinner';

const Produitts = () => {

    const [produits, setproduits] = useState([])
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getProduits().then((membre) => {
        setproduits(membre);
      setloading(false)
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  const TABLE_HEAD = ["Image", "Nom", "Montant","Total", ""];

    return (
        <div className='pt-[25px]  px-[25px] bg-[#F8F9FC]'>
            <div>
                <Card className="h-full w-full overflow-scroll">
                    <CardHeader floated={false} shadow={false} className="rounded-none">
                        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div className='flex'>
                                <div className='px-5 flex items-center'>
                                    <FaCreditCard className='' />
                                    <div className='ml-10'>
                                        <Typography variant="h5" color="blue-gray">
                                            Produits
                                        </Typography>
                                        <Typography variant="h9">
                                            Liste des produits
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    {
                        produits.length > 0 ? (
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    {head}
                                                </Typography>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <TableProduit TABLE_ROWS={produits} />
                            </table>
                        ) : null
                    }
                    {loading && (
              <Spinner/>
            )}
                </Card>
            </div>
        </div>
    )
}

export default Produitts