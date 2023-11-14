
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

let token = `Bearer ${localStorage.getItem("token")}`;
let url = 'https://apiclient.creditshop-africa.africa/api/';



export const VerifyCodeSms = (data) => {
    return axios.post(`${url}VerifyCode`, data,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        }).then((response) => {
            toast.success('le code a ete envoyé...')
            return response.data.code;
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