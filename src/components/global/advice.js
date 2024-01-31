import axios from "../../api/axios";

export const getAdvice = async (randomId) => {
    const id = randomId;
    try {
        const response = await axios.get('/advice/' + id);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}