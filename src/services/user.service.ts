import axios from 'axios';
import { UserData } from '@/types/types';

const apiClient = axios.create({
    baseURL: process.env.IS_DEV ? '/api' : process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const UserService = {
    async createUser(userData: Omit<UserData, 'firstName' | 'lastName'>) {
        try {
            const response = await apiClient.post('/auth/register', userData);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error.message);
            throw error;
        }
    },

    // Другие методы для работы с пользователем
};
