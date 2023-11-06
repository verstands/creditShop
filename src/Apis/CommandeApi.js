
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

let token = `Bearer ${localStorage.getItem("token")}`;
let url = 'https://apiclient.creditshop-africa.africa/api/';

export const addCommande = (data) => {
    return axios.post(`${url}credit`, data,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        }).then((response) => {
            Swal.fire({
                icon: 'success',
                text: `${response.data.message}`,
                confirmButtonText: 'OK'
            })
        }).catch((error) => {
            if (error.response && error.response.status === 422) {
                Swal.fire({
                    icon: 'error',
                    text: `${error.response.data.message}`,
                });
            } else if (error.response.status === 401) {
                window.location.href = '/login'

            } else {
                Swal.fire({
                    icon: 'error',
                    text: `${error.response.data.message}`,
                    confirmButtonText: 'OK'
                })
            }
        })
}