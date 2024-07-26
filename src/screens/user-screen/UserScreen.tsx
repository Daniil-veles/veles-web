// import styles from './UserScreen.module.scss';

import Container from "@/components/container/Container";
import OrganizationInfo from "@/components/elements/organization-info/OrganizationInfo";
import SettingsInfo from "@/components/elements/settings-info/SettingsInfo";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import { useAppDispatch } from "@/hooks";
import Layout from "@/layouts/Layout";
import { UserService } from "@/services/user.service";
import { setUserInfo } from "@/store/slices/userSlice";
import { CategoryKeys } from "@/types/types.interface";
import { UserServerData } from "@/types/user.interface";
import { adaptToUserData } from "@/utils/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const categories: Record<CategoryKeys, JSX.Element | string> = {
  organization: <OrganizationInfo />,
  employee: <p>Блок сотрудников</p>,
  tariff: <p>Блок тарифных планов</p>,
  settings: <SettingsInfo />,
};

const UserScreen: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response: UserServerData = await UserService.getUserInfo();
        const userInfo = adaptToUserData(response);
        console.log(userInfo);

        // Обновляет данные пользователя в сторе
        dispatch(setUserInfo(userInfo));
      } catch (error) {
        console.error("Error fetching user info:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserInfo();
  }, [dispatch]);

  const { category } = router.query;

  const renderContent = () => {
    if (isLoading) return <p>Загрузка...</p>;
    if (!category || typeof category !== "string")
      return <p>Выберите категорию</p>;
    return categories[category] || <p>Неизвестная категория</p>;
  };

  return (
    <Layout title="Личный кабинет" description="Это главная страница сайта">
      <Container className="grid grid-cols-[max-content_1fr] gap-10 grow">
        <UserMenu />

        <div className="w-full h-full">{renderContent()}</div>
      </Container>
    </Layout>
  );
};

export default UserScreen;
