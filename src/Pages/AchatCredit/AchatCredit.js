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

const AchatCredit = () => {
    const TABLE_HEAD = ["Montant", "Devise", "Date", ""];
    const [getAchatCredits, setgetAchatCredits] = useState([]);
    const [getAchatCreditCounts, setgetAchatCreditCounts] = useState(0);
    const [loading, setloading] = useState(true)
    let token = `Bearer ${localStorage.getItem("token")}`;
    const navigate = useNavigate();

   
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/login');
    }
  }, [navigate]);

    useEffect(() => {
        getAchatCredit().then((membre) => {
            setgetAchatCredits(membre);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getAchatCreditCount().then((membre) => {
            setgetAchatCreditCounts(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    const Redige = () => {
        navigate('/achatcadre')
    }
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
                                            Achat credit : {parseInt(getAchatCreditCounts)}Fc
                                        </Typography>
                                        <Typography variant="h9">
                                            Liste des achat credits
                                        </Typography>
                                        <Typography variant="h9">
                                            <button onClick={Redige} type="submit" class="w-full text-white bg-primary-600 bg-dark-purple hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                <div class="flex items-center justify-center">
                                                    {loading && <div class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white-900 mr-2"></div>}
                                                    <span class="text-center">Achat credit</span>
                                                </div>
                                            </button>
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
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
                        <TableAchatCredit TABLE_ROWS={getAchatCredits} />
                    </table>
                </Card>
            </div>
        </div>
    )
}

export default AchatCredit