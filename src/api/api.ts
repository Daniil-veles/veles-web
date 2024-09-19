import { deleteAccessToken, getAccessToken } from '@/utils/utils';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Router from "next/router";

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
            const { status } = error.response;

            if (status === 401) {
                console.log('Unauthorized - please log in again.');

                // Удаляем токен
                deleteAccessToken();

                // Проверяем текущий маршрут
                const currentPath = Router.pathname;

                // Если текущий путь НЕ главная страница ("/"), выполняем редирект
                if (currentPath !== '/' && currentPath !== '/auth/login') {
                    Router.push('/auth/login'); // Редиректим на страницу логина
                }
            }
        }

        // Передаем ошибку дальше для дальнейшей обработки
        return Promise.reject(error);
    }
);


export default apiClient;