// import styles from './UserScreen.module.scss';

import Container from "@/components/container/Container";
import Layout from "@/layouts/Layout";

const UserScreen: React.FC = () => {
   return (
    <Layout title="Личный кабинет" description="Это главная страница сайта">
        <Container className="">
            <p>
                Личный кабинет
            </p>
        </Container>
    </Layout>
   );  
}; 

export default UserScreen;