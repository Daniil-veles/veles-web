import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

export const OrganizationService = {
    async addNew() {
        const { data } = await axios.get('/org');
        return data;
    },

    async getByID(id: number) {
        const { data } = await axios.get('/org', {
            params: {
                id
            }
        });
        return data;
    }
}