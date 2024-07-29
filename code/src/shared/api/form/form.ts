import axios from 'axios';
import { Data } from './types';

export const sendFormData = async (data: Data) => {
    try {
        console.log(data);
        const response = await axios.post('https://laboratoria-internet/api', data);
        
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при отправке данных');
    }
};
