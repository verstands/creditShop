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
import Articles from '../Pages/Article/Articles';
import OneArticle from '../Pages/OneArticle/OneArticle';



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
                path: '/articles',
                element : <Articles />
            },
            {
                path: '/onearticle',
                element : <OneArticle />
            }
            
        ]
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path: '*',
        element : <Page404 />
    }
])

export default routes