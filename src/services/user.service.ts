import apiClient from "@/api/api";
import { UserDataFromServer } from "@/types/user.interface";

export const UserService = {
    async getUserInfo() {
        try {
            const response = await apiClient.get<UserDataFromServer>('/users/me');
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error.message);
            throw error;
        }
    },

    async updateUserInfo(data: any) {
        try {
            const response = await apiClient.patch('/users/me', data);
            return response.data;
        } catch (error) {
            console.error('Error update user:', error.message);
            throw error;
        }
    },

    // async verifyUserEmail() {
    //     try {
    //         const response = await apiClient.post('/users/email');
    //         return response.data;
    //     } catch (error) {
    //         console.error('Error creating user:', error.message);
    //         throw error;
    //     }
    // },


    // Другие методы для работы с пользователем
};
