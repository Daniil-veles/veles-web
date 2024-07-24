// import styles from './UserScreen.module.scss';

import Container from "@/components/container/Container";
import OrganizationInfo from "@/components/elements/organization-info/OrganizationInfo";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import { useAppDispatch } from "@/hooks";
import Layout from "@/layouts/Layout";
import { UserService } from "@/services/user.service";
import { setUserInfo } from "@/store/slices/userSlice";
import { UserServerData } from "@/types/user.interface";
import { adaptToUserData } from "@/utils/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";

const categories = {
  organization: <OrganizationInfo />,
  employee: <p>Блок сотрудников</p>,
  tariff: <p>Блок тарифных планов</p>,
  settings: <p>Блок настроек</p>,
};

const UserScreen: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response: UserServerData = await UserService.getUserInfo();
        const userInfo = adaptToUserData(response);

        // Обновляет данные пользователя в сторе
        dispatch(setUserInfo(userInfo));

        // console.log(response);
      } catch (error) {
        console.error("Error fetching user info:", error.message);
      }
    }

    fetchUserInfo();
  }, [dispatch]);

  const { category } = router.query;

  const renderContent = () => {
    if (!category || typeof category !== "string")
      return <p>Выберите категорию</p>;
    return categories[category] || <p>Неизвестная категория</p>;
  };

  return (
    <Layout title="Личный кабинет" description="Это главная страница сайта">
      <Container className="grid grid-cols-[max-content_1fr] gap-10 grow">
        <UserMenu />

        <div className="w-full h-full">
          {renderContent()}
        </div>
      </Container>
    </Layout>
  );
};

export default UserScreen;
