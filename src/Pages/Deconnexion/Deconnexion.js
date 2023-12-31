import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";

const Deconnexion = () => {
    const navigate = useNavigate();
    let url = 'https://apiclient.creditshop-africa.africa/api/';
    let token = `Bearer ${localStorage.getItem("token")}`;

    useEffect(() => {
        toast.success(`Vous etes deconnecter`);
        localStorage.removeItem('token')
        navigate('/')
        axios.get(`${url}SignOut`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            }
        ).then((response) => {
            navigate('/')
        }).catch((error) => {
            navigate('/')
        });
    }, []);
    return (
        <div>redicetion...</div>
    )
}

export default Deconnexion