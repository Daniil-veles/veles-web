import apiClient from "@/api/api";
import { UserServerData } from "@/types/user.interface";

export const UserService = {
    async getUserInfo() {
        try {
            const response = await apiClient.get<UserServerData>('/users/me');
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error.message);
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
