import { createContext, ReactNode, useEffect, useState } from "react";
import { adaptedUserData } from "@/components/ui/login-form/utils";
import {
  IAdaptedLoginFormData,
  ILoginFormData,
} from "@/components/ui/login-form/LoginForm.interface";
import { AuthService } from "@/services/auth.service";
import {
  adaptToUserData,
  deleteAccessToken,
  setAccessToken,
} from "@/utils/utils";
import { AuthorizationStatus } from "@/types/state.interface";
import { useAppDispatch } from "@/hooks";
import { UserService } from "@/services/user.service";
import { setUserInfo } from "@/store/slices/userSlice";
import { useRouter } from "next/router";

interface IAuthContextProps {
  login: (
    data: ILoginFormData,
    rememberMe: boolean
  ) => Promise<{ success: boolean } | void>;
  logout: () => Promise<void>;
  authStatus: AuthorizationStatus;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [authStatus, setAuthStatus] = useState<AuthorizationStatus>(
    AuthorizationStatus.Unknown
  );

  // Проверка авторизации при первой загрузке
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await AuthService.checkAuthStatus();
        console.log("Check authStatus:", response);

        if (response.status === 200) {
          setAuthStatus(AuthorizationStatus.Auth);
        } else {
          setAuthStatus(AuthorizationStatus.NoAuth);
          deleteAccessToken();
          router.push("/auth/login");
        }
      } catch (error) {
        console.error("Error check auth AuthContext:", error?.message);
        setAuthStatus(AuthorizationStatus.NoAuth);
        deleteAccessToken();
        router.push("/auth/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (data: ILoginFormData, rememberMe: boolean) => {
    const formattedUserData: IAdaptedLoginFormData = adaptedUserData(data);

    try {
      const response = await AuthService.login(formattedUserData);

      if (response.status === 200) {
        // Успешно выполненный вход
        console.log("Вход выполнен:", response);

        const accessToken = response.data.access_token;
        setAccessToken(accessToken, rememberMe);
        setAuthStatus(AuthorizationStatus.Auth);

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
        dispatch(setUserInfo(adaptedData));

        router.push("/profile");
        return { success: true };
      } else {
        console.error("Login failed:", response.error);
        return { success: false };
      }
    } catch (error) {
      console.error("Failed to login:", error?.message);
      return { success: false };
    }
  };

  const logout = async () => {
    try {
      // await AuthService.logout();

      // Успешно выполненный выход
      console.log("Выход совершен");
    } catch (error) {
      console.error("Failed to logout:", error?.message);
    } finally {
      deleteAccessToken();
      setAuthStatus(AuthorizationStatus.NoAuth);
      router.push("/auth/login");
    }
  };

  const value = {
    login,
    logout,
    authStatus,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
