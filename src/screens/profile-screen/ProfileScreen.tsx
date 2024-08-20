import Container from "@/components/container/Container";
import PersonInfo from "@/components/elements/person-info/PersonInfo";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import PrivateRoute from "@/hoc/PrivateRoute";
import Layout from "@/layouts/Layout";

const ProfileScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <Layout title="Личный кабинет" description="Это главная страница сайта">
        <Container className="flex flex-col flex-grow">
          <div className="flex-grow grid grid-cols-[max-content_1fr] gap-10">
            <UserMenu />

            <PersonInfo />
          </div>
        </Container>
      </Layout>
    </PrivateRoute>
  );
};

export default ProfileScreen;
