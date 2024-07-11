import { UserData } from '@/types/types';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

export const UserService = {
    async createUser(value: Omit<UserData, 'firstName' | 'lastName'>) {
        try {
            const { data } = await axios.post('/auth/register', value, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return data;
        } catch (error) {
            console.error("Error creating user:", error.message);
            throw error; 
        }
    },

    // async getByID(id: number) {
    //     const { data } = await axios.get('/org', {
    //         params: {
    //             id
    //         }
    //     });
    //     return data;
    // }
}
