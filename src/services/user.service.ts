import apiClient from "@/api/api";
import { UserInfo } from "@/types/state";

export const UserService = {
    async getUserInfo() {
        try {
            const response = await apiClient.get<UserInfo>('/users/me');

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