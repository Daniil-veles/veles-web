import Container from "@/components/container/Container";
import PersonInfo from "@/components/elements/person-info/PersonInfo";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import PrivateRoute from "@/hoc/PrivateRoute";
import DashboardLayout from "@/layouts/DashboardLayout";
import Layout from "@/layouts/Layout";

// DashboardLayout

const ProfileScreen: React.FC = () => {
  return (
    <PrivateRoute>
      {/* <Layout title="Личный кабинет" description="Это главная страница сайта">
        <Container className="flex flex-col flex-grow">
          <div className="flex-grow grid grid-cols-[max-content_1fr] gap-10">
            <UserMenu />

            <PersonInfo />
          </div>
        </Container>
      </Layout> */}

      <DashboardLayout
        title="Личный кабинет"
        description="Это главная страница сайта"
      >
        <div className="grow grid grid-cols-[max-content_1fr] gap-10">
          

          <PersonInfo />
        </div>
      </DashboardLayout>
    </PrivateRoute>
  );
};

export default ProfileScreen;
