// import styles from './UserScreen.module.scss';

import Container from "@/components/container/Container";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import Layout from "@/layouts/Layout";

const UserScreen: React.FC = () => {
  return (
    <Layout title="Личный кабинет" description="Это главная страница сайта">
      <Container className="flex flex-col flex-grow">
        <div className="flex-grow grid grid-cols-[max-content_1fr] gap-10 pt-5">
          <UserMenu />

          <div className="w-full h-full overflow-y-auto">
            <p>
              Главная
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default UserScreen;
