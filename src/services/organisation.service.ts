import apiClient from '@/api/api';
import { FormSchemaType } from '@/components/ui/create-organization-form/CreateOrganizationForm.interface';

export const OrganizationService = {
    async registration(data: FormSchemaType) {
        try {
            const response = await apiClient.post('/company/add', data);

            return response;
        } catch (error) {
            console.error('Error creating user:', error.message);
            throw error;
        }
    },
 
}
