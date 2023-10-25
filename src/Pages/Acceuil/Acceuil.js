import React from 'react'
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
} from 'react-icons/fa';
import TablePaiement from '../../Components/TablePaiement/TablePaiement';

const Acceuil = () => {
  const TABLE_HEAD = ["Montant", "Devise", "Date", ""];

  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
  ];
 
  return (
    <div className='pt-[25px]  px-[25px] bg-[#dfe1e3]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#363738] text-[28px] leading-[34px] font-n'>Accueil</h1>
        <div>

        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4  gap-[30px] mt-[25px] pb-[15px]'>
        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-dark-purple flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Nombre commade</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>200</h1>
          </div>
          <FaTachometerAlt />
        </div>
        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-dark-purple flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Montant total du commande</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>200</h1>
          </div>
          <FaTachometerAlt />
        </div>
        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-yellow-500 flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Achat credit</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>200</h1>
          </div>
          <FaTachometerAlt />
        </div>
        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-yellow-500 flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Paiements</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>200</h1>
          </div>
          <FaTachometerAlt />
        </div>
      </div>
      <Card className="h-full w-full overflow-scroll">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="flex">
              <div className='px-5 flex items-center'>
                <Typography variant="h5" color="blue-gray">
                  Les paiement recents
                </Typography>
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
          <TablePaiement TABLE_ROWS={TABLE_ROWS} />
        </table>
      </Card>
    </div>
  )
}

export default Acceuil