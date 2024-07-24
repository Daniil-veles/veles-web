// import styles from './SettingsInfo.module.scss';

import { useAppSelector } from "@/hooks";

const SettingsInfo: React.FC = () => {
    const userInfo = useAppSelector((state) => state.USER); 
    console.log(userInfo);
    

   return (
       <div className=''>
           
       </div>
)
};

export default SettingsInfo;