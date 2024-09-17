import UserMenu from "@/components/elements/user-meu/UserMenu";
import Layout from "./Layout";
import DashboardHeader from "@/components/elements/dashboard-header/DashboardHeader";
import { useEffect } from "react";
import { AuthorizationStatus } from "@/types/state.interface";
import { setUserInfo } from "@/store/slices/userSlice";
import { useAppDispatch } from "@/hooks";
import { UserService } from "@/services/user.service";
import { adaptToUserData } from "@/utils/utils";

interface IDashboardLayout {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayout> = ({
  title,
  description,
  children,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        // Мокает данные юзера
        // const user = {
        //   id: null,
        //   email: "test@mail.ru",
        //   fullName: "Даниил Суворов",
        //   birthDate: "21.10.2000",
        //   phone: "+79807057002",
        //   isActive: false,
        //   isSuperuser: false,
        //   isVerified: false,
        //   picture: "",
        //   isAuth: AuthorizationStatus.Auth,
        // };

        const user = await UserService.getUserInfo();
        const adaptedData = adaptToUserData(user);
        // console.log(adaptedData);

        dispatch(setUserInfo(adaptedData));
      } catch (error) {
        console.error("Error fetching user info:", error.message);
      }
    }

    fetchUserInfo();
  }, [dispatch]);

  return (
    <Layout  title={title} description={description}>
      <div className="h-full grid grid-cols-[200px_1fr] gap-x-[30px] p-5 pb-8">
        <UserMenu />

        <div className="flex flex-col gap-8">
          <DashboardHeader />

          {children}
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
