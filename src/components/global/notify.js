import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.TOP_LEFT
    });
};
export const notifyError = (msg) => {
    toast.error(msg, {
        position: toast.POSITION.TOP_LEFT
    });
};