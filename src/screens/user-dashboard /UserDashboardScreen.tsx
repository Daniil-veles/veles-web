// import styles from './[category].module.scss';

import Container from "@/components/container/Container";
import OrganizationInfo from "@/components/elements/organization-info/OrganizationInfo";
import SettingsInfo from "@/components/elements/settings-info/SettingsInfo";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import UserProfileCard from "@/components/elements/user-profile-card/UserProfileCard";
import Layout from "@/layouts/Layout";
import { CategoryKeys } from "@/types/types.interface";
import { useRouter } from "next/router";

const categories: Record<CategoryKeys, JSX.Element | string> = {
  profile: <UserProfileCard />,
  organization: <OrganizationInfo />,
  employee: <p>Блок сотрудников</p>,
  tariff: <p>Блок тарифных планов</p>,
  settings: <SettingsInfo />,
};

const UserDashboardScreen: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  const renderContent = () => {
    if (!category || typeof category !== "string")
      return <p>Выберите категорию</p>;

    // Приведение типа категории
    const categoryKey = category as CategoryKeys;

    // Проверка на существование ключа
    if (!(categoryKey in categories)) {
      return <p>Неизвестная категория</p>;
    }

    return categories[categoryKey] || <p>Неизвестная категория</p>;
  };
  return (
    <Layout title="Личный кабинет" description="Это главная страница сайта">
      <Container className="flex flex-col flex-grow">
        <div className="flex-grow grid grid-cols-[max-content_1fr] gap-10">
          <UserMenu />

          <div className="">{renderContent()}</div>
        </div>
      </Container>
    </Layout>
  );
};

export default UserDashboardScreen;
