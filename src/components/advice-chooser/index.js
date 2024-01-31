import { useState } from 'react'
import { getAdvice } from '../global/advice'
import { notifyError } from '../global/notify';
import { ToastContainer } from 'react-toastify';

const AdviceChooser = () => {
    const [advice, setAdvice] = useState();
    function validateValue(value) {
        let data = parseInt(value);
        if (Number.isInteger(data)) {
            if (data <= 0) {
                notifyError("Value must be greater than or equal to '1'");
            } else {
                return data;
            }
        } else {
            notifyError("Value must be an integer")
        }
    }

    function getAdviceById(value) {
        setAdvice(null);
        const validatedValue = validateValue(value);
        if (validatedValue != undefined) {
            getAdvice(validatedValue).then(function (result) {
                if (result?.slip != null) {
                    if (result.slip.advice.length <= 30) {
                        setAdvice(result.slip.advice);
                    } else {
                        setAdvice("Your advice is too long to display here.");
                    }
                } else if (result?.message != null) {
                    notifyError(result.message.text);
                }
            });
        }
    }

    return (
        <>
            <div className='gradient-background h-full min-h-screen relative'>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <div className='align-content-middle text-center'>
                    <h1><span className='text-white font-bold text-[70px] drop-shadow-lg'>Advice Slip</span></h1>
                    <div className='bg-white w-[700px] rounded-xl shadow-lg mt-5 p-10 text-center'>
                        <h2><span>Please enter a number to get a piece of advice !</span></h2>
                        <div className='mt-6 mb-6'>
                            <input
                                type="randomNumber"
                                id="randomNumber"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="0"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={
                                () => {
                                    let value = document.getElementById('randomNumber').value;
                                    getAdviceById(value);
                                }
                            }
                        >
                            Get Advice
                        </button>

                        {
                            advice != null
                                ? (
                                    <div className='mt-10 w-full border-dashed border-2 border-indigo-600 rounded-xl p-10'>
                                        <p>{advice}</p>
                                    </div>
                                ) : (
                                    null
                                )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdviceChooser