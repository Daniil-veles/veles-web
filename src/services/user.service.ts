import { AdaptedUserLoginData } from '@/components/ui/login-form/LoginForm.interface';
import { AdaptedUserData } from '@/components/ui/sign-up-form/SignUpForm.interface';
import axios from 'axios';
// import Cookies from 'js-cookie';
import qs from 'qs';

const apiClient = axios.create({
    baseURL: process.env.IS_DEV === 'development' ? '/api' : process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const UserService = {
    async createUser(userData: AdaptedUserData) {
        try {
            const response = await apiClient.post('/auth/register', userData);

            return response;
        } catch (error) {
            console.error('Error creating user:', error.message);
            throw error;
        }
    },

    async login(userData: AdaptedUserLoginData) {
        try {
            const urlEncodedData = qs.stringify({
                ...userData,
                grant_type: '',
                scope: '',
                client_id: '',
                client_secret: '',
            });

            const response = await apiClient.post(`/auth/jwt/login`, urlEncodedData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            return response;
        } catch (error) {
            console.error('Error creating user:', error.message);
            throw error;
        }
    },

    async logout() {
        try {
            // Получает accessToken из localStorage
            const token = localStorage.getItem('accessToken');
            console.log(token);

            const response = await apiClient.post(`/auth/jwt/logout`,
                null,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                    },
                }
            );

            return response;
        } catch (error) {
            console.error('Error creating user:', error.message);
            throw error;
        }
    },


    // Другие методы для работы с пользователем
};


// // Вход пользователя
// export const login = async (username: string, password: string) => {
//     const response = await axios.post(`${API_URL}/auth/jwt/login`, { username, password });
//     if (response.data.accessToken) {
//         Cookies.set('accessToken', response.data.accessToken);
//         Cookies.set('refreshToken', response.data.refreshToken);
//     }
//     return response.data;
// };

// // Выход пользователя
// export const logout = async () => {
//     await axios.post(`${API_URL}/auth/jwt/logout`);
//     Cookies.remove('accessToken');
//     Cookies.remove('refreshToken');
// };

// // Регистрация пользователя
// export const register = async (username: string, email: string, password: string) => {
//     const response = await axios.post(`${API_URL}/auth/register`, { username, email, password });
//     return response.data;
// };

// // Запрос на сброс пароля
// export const requestPasswordReset = async (email: string) => {
//     const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
//     return response.data;
// };

// // Сброс пароля
// export const resetPassword = async (token: string, newPassword: string) => {
//     const response = await axios.post(`${API_URL}/auth/reset-password`, { token, newPassword });
//     return response.data;
// };

// // Запрос на верификацию
// export const requestVerifyToken = async () => {
//     const response = await axios.post(`${API_URL}/auth/request-verify-token`);
//     return response.data;
// };

// // Верификация
// export const verify = async (token: string) => {
//     const response = await axios.post(`${API_URL}/auth/verify`, { token });
//     return response.data;
// };