import { getAccessToken } from '@/utils/utils';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

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


apiClient.interceptors.response.use((response: AxiosResponse) => {
    return response;
},
    async (error: AxiosError) => {
        if (error.response) {
            const { status } = error.response;

            if (status === 401) {
                // Переадресация на логин
                window.location.href = '/auth/login';

                console.log('Unauthorized - please log in again.');
                // Здесь можно добавить логику для обновления токена или уведомления пользователя
            }
        }

        // Передаем ошибку дальше для дальнейшей обработки
        return Promise.reject(error);
    }
);


export default apiClient;