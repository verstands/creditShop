import React from 'react'
import {
    FaTachometerAlt,
} from 'react-icons/fa';
import { PencilIcon } from "@heroicons/react/24/solid";
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

const TableProduit = ({ TABLE_ROWS }) => {
    return (
        <>
            <tbody>
                {TABLE_ROWS  && TABLE_ROWS.map((kf) => (
                    <tr key={kf.id} className="even:bg-blue-gray-50/50">
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {kf.aac_id_credits}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                             {kf.aac_id_articles}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                            {kf.aac_nom_article}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                            {kf.aac_nom_article}
                            </Typography>
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

export default TableProduit