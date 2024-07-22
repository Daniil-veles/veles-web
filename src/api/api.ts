import { getAccessToken } from '@/utils/utils';
import axios, { InternalAxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: process.env.IS_DEV === 'development' ? '/api' : process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;