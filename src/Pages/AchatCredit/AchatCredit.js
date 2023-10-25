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
    FaCreditCard,
    FaShoppingCart
} from 'react-icons/fa';
import { getAchatCredit } from '../../Apis/AchatCreditApi';
import TableAchatCredit from '../../Components/TableAchatCredit/TableAchatCredit';

const AchatCredit = () => {
    const TABLE_HEAD = ["Montant", "Devise", "Date", ""];
    const [getAchatCredits, setgetAchatCredits] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getAchatCredit().then((membre) => {
            setgetAchatCredits(membre);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);
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
                                            Achat credit :  <span className='border-4'>3000Fc</span>
                                        </Typography>
                                        <Typography variant="h9">
                                            Liste des achat credits
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