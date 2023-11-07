import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { TEInput, TERipple } from "tw-elements-react";
import { addUser } from '../../Apis/UserApi';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [showNan, setshowNan] = useState(true)
  const [IsMobile, setIsMobile] = useState(false)
  const [loading, setloading] = useState(false);
  const form = useRef();
  const [numero, setNumero] = useState('243');
  const navigate = useNavigate();


  let token = `Bearer ${localStorage.getItem("token")}`;
  let url = 'https://apiclient.creditshop-africa.africa/api/';



  function handleResize() {
    if (typeof window.innerWidth <= 640) {
      setshowNan(false)
      setIsMobile(true)
    } else {
      setshowNan(true)
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      window.addEventListener('resize', handleResize)
    } else {
      window.removeEventListener('resize', handleResize)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNumeroChange = (event) => {
    const value = event.target.value;
    setNumero(value);
  };


  const Save = (e) => {
    e.preventDefault()
    setloading(true)

    if (!numero.startsWith("243") || numero.startsWith("0")) {
      setloading(false);
      toast.error("Le numéro de téléphone doit commencer par 243 et ne pas commencer par 0");
      return;
    }
    const postData = {
      client_tel: numero,
      client_mdp: form.current[10].value,
      client_nom: form.current[0].value,
      client_post: form.current[1].value,
      client_prenom: form.current[2].value,
      client_carte: 0,
      client_adresse: form.current[3].value + form.current[5].value + form.current[6].value + form.current[7].value,
      client_commune: form.current[4].value,
      client_date_creation: 0,
      client_agent_activa: 0,
      client_activation: 0,
      client_profil: 0,
      client_agent: 0,
      client_etat: 1,
      client_province: form.current[8].value,
    }
    const mpd = form.current[10].value
    if (mpd.length > 4) {
      axios.post(`${url}SignUpUser`, postData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token
          }
        }).then((response) => {
          let token;
            if (response.data.token !== undefined) {
                token = JSON.stringify(response.data.token);
                let tokenT = token.substring(1, token.length - 1);
                localStorage.setItem("token", tokenT);
                setloading(false);
                toast.success(`Vous etes connecter`);
                navigate('/services');
            } else {
                token = '';
            }
        }).catch((error) => {

          if (error.response && error.response.status === 422) {
            toast.error(`${error.response.data.message}`)
            setloading(false)
          } else if (error.response.status === 500) {
            toast.error(`${error.response.data.message}`)
            setloading(false)
          } else if (error.response.status === 401) {
            window.location.href = "/";
          } else {
            toast.error(`${error.response.data.message}`)
            setloading(false)

          }
        })
    } else {
      toast.error(`Votre mot de passe doit avoir 4 caractere`)
      setloading(false)
    }

  }
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-11 h-11 rounded mr-2" src="images/logos.png" alt="logo" />
            <p className='text-dark-purple'>CreditShop</p>
          </a>
          <div class="w-auto bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                S'isncrire
              </h1>
              <form ref={form} onSubmit={Save}>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                    <input type="text" name="nom" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postnom</label>
                    <input type="text" name="postnom" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prenom</label>
                    <input type="text" name="prenom" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avenue</label>
                    <input type="text" name="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero parceille</label>
                    <input type="text" name="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quartier</label>
                    <input type="text" name="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commune</label>
                    <input type="text" name="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ville</label>
                    <input type="text" name="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
                    <input type="text" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pays</label>
                    <select class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="" id="">
                      <option value="rdc">RDC</option>
                      <option value="rdc">Brazza</option>
                      <option value="rdc">Gabon</option>
                      <option value="rdc">Kenya</option>
                    </select>
                  </div>
                  <div>
                    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                    <input type="number" maxLength={12}  value={numero} onChange={handleNumeroChange} name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2438XXXXXXXXX" required="" />
                  </div>
                  <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                    <input type="password" maxLength={4} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                </div>
                <br />
                <button type="submit" class="w-full text-white bg-primary-600 bg-dark-purple hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <div class="flex items-center justify-center">
                    {loading && <div class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white-900 mr-2"></div>}
                    <span class="text-center">Cliquez ici pour vous inscrire</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp