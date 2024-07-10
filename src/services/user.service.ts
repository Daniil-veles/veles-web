import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

export const UserService = {
    async createUser(value) {
        const { data } = await axios.post('/auth/register', value);
        return data;
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
