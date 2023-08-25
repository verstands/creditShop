import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from '../Components/Layout/Layout';
import Dashboad from '../Pages/Dashboad/Dashboad';


const routes = createBrowserRouter([
    {
        path : '/',
        element : <Layout />,
        children : [
            {
                path : '/dashboad',
                element : <Dashboad />
            }
        ]
    },
    {
        path : '/login',
        element : <p>Bonjour</p>
    }
])

export default routes