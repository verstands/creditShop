
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

let token = `Bearer ${localStorage.getItem("token")}`;
let url = 'https://apiclient.creditshop-africa.africa/api/';


export const getProduits = () => {
    return axios.get(`${url}produits`,
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