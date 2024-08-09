// import styles from './OrganizationList.module.scss';
import { Company } from '@/types/organization.interface';
import OrganizationItem from '../organization-item/OrganizationItem';

interface IOrganizationListProps {
    organizationList: Company[];
};

const OrganizationList: React.FC<IOrganizationListProps> = ({organizationList}) => {
   return (
       <div className='grid gap-4'>
            {
                organizationList ? organizationList.map((item, index) => (
                    <OrganizationItem key={item.name + index} organization={item} index={index} openIndex={0} value={`item-${index}`} />
                ))  : 'Организация не найдена'
            }
       </div>
   );
};

export default OrganizationList;