import axios from 'axios';

const api_url = '';

export const api = axios.create({
    baseURL: api_url,
});

export const getTours = async () => {
    try {
        const response = await api.get('/tours?_embed');
        return response.data;
    }catch (error) {
        console.error('Error fetching tours:', error);
        return [];
    }
};

export const getHotels = async () => {
    try {
        const response = await api.get('/hotels?_embed');
        return response.data;
    }catch (error) {
        console.error('Error fetching hotels:', error);
        return [];
    }
};