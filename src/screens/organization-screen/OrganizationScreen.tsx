import Container from "@/components/container/Container";
import Organization from "@/components/elements/organization/Organization";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import PrivateRoute from "@/hoc/PrivateRoute";
import DashboardLayout from "@/layouts/DashboardLayout";
import Layout from "@/layouts/Layout";

const OrganizationScreen: React.FC = () => {
  return (
    // <PrivateRoute>
    <DashboardLayout
      title="Личный кабинет"
      description="Это главная страница сайта"
    >
      <div className="flex-grow grid grid-cols-[max-content_1fr] gap-10">
        Организация
        {/* <UserMenu /> */}
        {/* <Organization /> */}
      </div>
    </DashboardLayout>
    // </PrivateRoute>
  );
};

export default OrganizationScreen;
