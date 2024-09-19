import UserMenu from "@/components/elements/user-meu/UserMenu";
import Layout from "./Layout";
import DashboardHeader from "@/components/elements/dashboard-header/DashboardHeader";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks";
import { setUserInfo } from "@/store/slices/userSlice";
import { AuthorizationStatus } from "@/types/state.interface";

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
    const user = {
      id: 1,
      email: "test@mail.ru",
      fullName: "Даниил Суворов",
      birthDate: "21.10.2000",
      phone: "+79807057002",
      isActive: true,
      isSuperuser: false,
      isVerified: true,
      picture: "/path/to/picture",
      isAuth: AuthorizationStatus.Auth,
    };

    // Передаем мокированные данные в Redux
    dispatch(setUserInfo(user));
  }, [dispatch]); 

  return (
    <Layout title={title} description={description}>
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
