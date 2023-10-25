
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

let token = `Bearer ${localStorage.getItem("token")}`;
let url = 'http://localhost:5000/api/';

export const getNbrCommande = () => { 
    return axios.get(`${url}nbrcommande`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        }
    ).then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/";
        } else {
            toast.error(`${error.response.data.message}`)
        }
    });
}

export const getSumCommande = () => { 
    return axios.get(`${url}sumcommande`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        }
    ).then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/";
        } else {
            toast.error(`${error.response.data.message}`)
        }
    });
}


export const getSumAchatCredit = () => { 
    return axios.get(`${url}sumachatcredit`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        }
    ).then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/";
        } else {
            toast.error(`${error.response.data.message}`)
        }
    });
}

export const getSumPaiement = () => { 
    return axios.get(`${url}sumpaiement`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        }
    ).then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/";
        } else {
            toast.error(`${error.response.data.message}`)
        }
    });
}