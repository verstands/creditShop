
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

let token = `Bearer ${localStorage.getItem("token")}`;
let url = 'https://apiclient.creditshop-africa.africa/api/';



export const getPaiement = () => {
    return axios.get(`${url}paiements`,
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

        });
}



export const getSystementPaiement = (devise, montant, phone, refernce) => {
    return axios.get(`${url}apipaiement/${devise}/${montant}/${phone}/${refernce}`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        }
    ).then((response) => {
        Swal.fire({
            icon: 'success',
            text: `${response.data.message}`,
        });
    })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                text: `Probleme de la connexion, Vueillez ressayez`,
            });
        });
}

export const addPayer = (dataE) => {
    axios
        .get(`${url}apipaiement/${dataE}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        })
        .then((response) => {
            toast.success(`Veuillez patienter et confirmer votre paiement en ligne sur le prochain popup sur votre téléphone`)
        })
        .catch((error) => {
            alert(error);
        });

}