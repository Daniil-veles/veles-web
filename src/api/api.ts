import { getAccessToken } from '@/utils/utils';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: process.env.API_URL, // Используем переменную окружения
    headers: {
        'Content-Type': 'application/json',
    },
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
            const { status, config } = error.response;

            if (status === 401 && config?.url && !config.url.includes('/logout') && !config.url.includes('/')) {
                // Переадресация на логин
                if (window.location.pathname !== '/auth/login') {
                    window.location.href = '/auth/login';
                }

                console.log('Unauthorized - please log in again.');
                // Здесь можно добавить логику для обновления токена или уведомления пользователя
            }
        }

        // Передаем ошибку дальше для дальнейшей обработки
        return Promise.reject(error);
    }
);


export default apiClient;