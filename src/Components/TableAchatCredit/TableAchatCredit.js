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
                {TABLE_ROWS  && TABLE_ROWS.map((kf) => (
                    <tr key={kf.id} className="even:bg-blue-gray-50/50">
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {kf.paiement_montant}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                            USD
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                            {dateFormat(kf.created_at, 'dd/mm/yyyy')}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                            {kf.paiement_agent && kf.paiement_agent.vendeur_nom}
                            </Typography>
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

export default TableAchatCredit