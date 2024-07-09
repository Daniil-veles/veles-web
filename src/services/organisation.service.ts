import axios from 'axios';

const API_URL = 'http://localhosh:4200';
axios.defaults.baseURL = API_URL;

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