import apiClient from '@/api/api';
import { AdaptedUserLoginData } from '@/components/ui/login-form/LoginForm.interface';
import { AdaptedUserFormDataToServer } from '@/types/user.interface';
import qs from 'qs';


export const AuthService = {
    async registration(userData: AdaptedUserFormDataToServer) {
        try {
            const response = await apiClient.post('/auth/register', userData);
            return response;
        } catch (error) {
            console.error('Error auth user:', error.message);
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
            console.error('Error login:', error.message);
            throw error;
        }
    },

    async logout() {
        try {
            const response = await apiClient.post(`/auth/jwt/logout`, null);
            return response;
        } catch (error) {
            console.error('Error logout:', error.message);
            throw error;
        }
    },

    async forgotPassword(data: { email: string }) {
        try {
            const response = await apiClient.post(`/auth/forgot-password`, data);
            return response;
        } catch (error) {
            console.error('Error forgot-password:', error.message);
            throw error;
        }
    },

    // TODO: Дописать метод
    // async resetPassword(data: {
    //     email: string,
    //     token: string,
    //     password: string
    // }) {
    //     try {
    //         const response = await apiClient.post(`/auth/reset-password`, data);
    //         return response;
    //     } catch (error) {
    //         console.error('Error forgot-password:', error.message);
    //         throw error;
    //     }
    // },

    async checkAuthStatus() {
        try {
            const response = await apiClient.post(`/user/me`);
            return response;
        } catch (error) {
            console.error('Error check auth:', error.message);
            throw error;
        }
    }
}