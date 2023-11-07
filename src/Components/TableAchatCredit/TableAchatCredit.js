import React from 'react'
import {
    FaTachometerAlt,
} from 'react-icons/fa';
import {
    Typography,
    
} from "@material-tailwind/react";
import dateFormat from 'dateformat';

const TableAchatCredit = ({ TABLE_ROWS }) => {
    return (
        <>
           <tbody>
                <tr key={TABLE_ROWS.ac} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            {TABLE_ROWS.montant_ac}
                        </Typography>
                    </td>
                    <td className="p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            USD
                        </Typography>
                    </td>
                    <td className="p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        {dateFormat(TABLE_ROWS.created_at, 'dd-mm-yyyy')}
                        </Typography>
                    </td>
                    
                </tr>

            </tbody>
        </>
    )
}

export default TableAchatCredit