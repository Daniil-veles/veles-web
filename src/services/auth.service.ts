import apiClient from '@/api/api';
import { AdaptedUserLoginData } from '@/components/ui/login-form/LoginForm.interface';
import { AdaptedUserFormData } from '@/types/user.interface';
import qs from 'qs';


export const AuthService = {
    async registration(userData: AdaptedUserFormData) {
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
            const response = await apiClient.post(`/auth/jwt/logout`,
                null,
                {
                    headers: {
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

    async checkAuth() {
        try {
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
    }
}