import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Service from '../Pages/Service/Service';
import Paiement from '../Pages/Paiement/Paiement';
import AchatCredit from '../Pages/AchatCredit/AchatCredit';
import Profil from '../Pages/Profil/Profil';
import Page404 from '../Pages/404/Page404';
import Login from '../Pages/Login/Login';
import Articles from '../Pages/Article/Articles';
import OneArticle from '../Pages/OneArticle/OneArticle';
import SignUp from '../Pages/SignUp/SignUp';
import Acceuil from '../Pages/Acceuil/Acceuil';


const RoutePage = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/inscription" element={<SignUp />} />
            <Route element={<Layout />}>
                <Route path="/services" element={<Service />} />
                <Route path="/paiements" element={<Paiement />} />
                <Route path="/achatcredit" element={<AchatCredit />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/articles/:id" element={<Articles />} />
                <Route path="/onearticle/:id" element={<OneArticle />} />
                <Route path="/acceuil" element={<Acceuil />} />
                <Route path="/dashboad" element={<Acceuil />} />
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default RoutePage