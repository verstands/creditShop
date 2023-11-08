import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { achatcreditAction } from '../../Apis/AchatCreditApi';

const AchatFormulaire = () => {
    const form = useRef();
    const [loading, setloading] = useState(false);
    const [numero, setNumero] = useState('243');
    const navigate = useNavigate();

    const handleNumeroChange = (event) => {
        const value = event.target.value;
        setNumero(value);
    };

    


    const PayBtn = async (e) => {
        e.preventDefault()
        setloading(true)
        if (!numero.startsWith("243") || numero.startsWith("0")) {
            setloading(false);
            toast.error("Le numéro de téléphone doit commencer par 243 et ne pas commencer par 0");
            return;
        }
        const data = {
            paiement_agent : form.current[0].value,
            paiement_montant : form.current[1].value
        }
        try {
            await achatcreditAction(data);
            setloading(false);
        } catch (error) {
            setloading(false);
            // Gérer l'erreur
        }
     
    }
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Achat credit
                        </h1>

                        <form ref={form} onSubmit={PayBtn} class="space-y-4 md:space-y-6" >
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">N° Telephone de bénéficiare</label>
                                <input type="number" maxLength={12} value={numero} onChange={handleNumeroChange} name="te" id="te" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Montant</label>
                                <input type="number" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 bg-dark-purple hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <div class="flex items-center justify-center">
                                    {loading && <div class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white-900 mr-2"></div>}
                                    <span class="text-center">Valider</span>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AchatFormulaire