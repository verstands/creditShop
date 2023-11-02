import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { addPayer } from '../../Apis/PaiiementApi';


const PaiementFormulaire = () => {
    const form = useRef();
    const [loading, setloading] = useState(false);

    let token = `Bearer ${localStorage.getItem("token")}`;
    const navigate = useNavigate();

    const PayBtn = (e) => {
        e.preventDefault()
        const data = {
            paiement_montant : form.current[0].value
        }
        addPayer(data)
    }

    if(token.length < 0){
        navigate('/login')
    }

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Payer ma commande
                            </h1>
                            
                            <form ref={form} onSubmit={PayBtn} class="space-y-4 md:space-y-6">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Montant</label>
                                    <input type="number" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                                </div>
                                <button type="submit" class="w-full text-white bg-primary-600 bg-dark-purple hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <div class="flex items-center justify-center">
                                        {loading && <div class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white-900 mr-2"></div>}
                                        <span class="text-center">Payer</span>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default PaiementFormulaire