import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Dashboad from '../Pages/Dashboad/Dashboad';
import Layout from '../Components/Layout/Layout';
import Service from '../Pages/Service/Service';
import Paiement from '../Pages/Paiement/Paiement';
import AchatCredit from '../Pages/AchatCredit/AchatCredit';
import Profil from '../Pages/Profil/Profil';
import Page404 from '../Pages/404/Page404';
import Login from '../Pages/Login/Login';



const routes = createBrowserRouter([
    {
        path : '/',
        element : <Layout />,
        children : [
            {
                path : '/dashboad',
                element : <Dashboad />
            },
            {
                path: '/services',
                element : <Service />
            },
            {
                path: '/paiements',
                element : <Paiement />
            },
            {
                path: '/achatcredit',
                element : <AchatCredit />
            },
            {
                path: '/profil',
                element : <Profil />
            },
            {
                path: '*',
                element : <Page404 />
            }
        ]
    },
    {
        path : '/login',
        element : <Login />
    }
])

export default routes