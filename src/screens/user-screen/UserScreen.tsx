// import styles from './UserScreen.module.scss';

import Container from "@/components/container/Container";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import Layout from "@/layouts/Layout";
import {
  BadgeRussianRuble,
  CirclePlus,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
// import CompanyScreen from "../company-screen/CompanyScreen";
// import AddOrganizationForm from "@/components/ui/add-organization-form/AddOrganizationForm";

const UserScreen: React.FC = () => {
  return (
    <Layout title="Личный кабинет" description="Это главная страница сайта">
      <Container className="grid grid-cols-[max-content_1fr] gap-10 grow">
        <UserMenu />

        <div className="w-full h-full">Блок</div>

        {/* <div className="grid grid-cols-[20%_1fr] gap-10 py-4">
          <div className="w-full">
            <img className="bg-fourth h-full" src="" alt="" />
          </div>

          <div className="w-full">
            <h2 className="text-center mb-3">Регистрация</h2>

            <AddOrganizationForm />
          </div>
        </div> */}
      </Container>
    </Layout>
  );
};

export default UserScreen;
