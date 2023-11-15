import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { addPayer } from '../../Apis/PaiiementApi';
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




const PaiementFormulaire = () => {
    const TABLE_HEAD = ["Montant", "Devise", "Date"];
    const form = useRef();
    const [loading, setloading] = useState(true);
    const [loadingA, setloadingA] = useState(false);
    const [getPaiements, setgetPaiements] = useState([]);
    let token = `Bearer ${localStorage.getItem("token")}`;
    let dataa = localStorage.getItem("data");
    const navigate = useNavigate();

    
    const PayBtn = async (e) => {
        e.preventDefault();
        setloadingA(true);
        try {
            const dataE= `USD/${form.current[0].value}/${dataa}/creditshop`;
            await addPayer(dataE);
        } catch (error) {
            console.error(error);
        } finally {
            setloadingA(false);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("token")) {
          navigate('/login');
        }
      }, [navigate]);
    
    

    useEffect(() => {
        getPaiement().then((membre) => {
            setgetPaiements(membre);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Paiement d'un acompte
                        </h1>

                        <form ref={form} onSubmit={PayBtn} class="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Montant</label>
                                <input type="number" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 bg-dark-purple hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <div class="flex items-center justify-center">
                                    {loadingA && <div class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white-900 mr-2"></div>}
                                    <span class="text-center">Je paie un acompte</span>
                                </div>
                            </button>
                        </form>
                    </div>
                    <hr />
                    <Card className="h-full w-full overflow-scroll">
                        <CardHeader floated={false} shadow={false} className="rounded-none">
                            <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                                <div className='flex'>
                                    <div className='px-1'>
                                        <div className='ml-10'>

                                            <center>
                                                <Typography variant="h9">
                                                    Liste des paiements d'un acompte
                                                </Typography>
                                            </center>
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
                            <TablePaiement TABLE_ROWS={getPaiements} />
                        </table>
                        {loading && (
                            <Spinner />
                        )}
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default PaiementFormulaire