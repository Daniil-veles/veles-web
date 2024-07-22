// import styles from './UserScreen.module.scss';

import Container from "@/components/container/Container";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import { useAppDispatch } from "@/hooks";
import Layout from "@/layouts/Layout";
import { UserService } from "@/services/user.service";
import { setUserInfo } from "@/store/slices/UserSlice";
import { adaptToUserData } from "@/utils/utils";
import { useEffect } from "react";

const UserScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await UserService.getUserInfo();
        const userInfo = adaptToUserData(response);

        // Теперь вы можете использовать преобразованные данные
        dispatch(setUserInfo(userInfo));

        console.log(response);
      } catch (error) {
        console.error("Error fetching user info:", error.message);
      }
    }

    fetchUserInfo();
  }, [dispatch]);

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
