import { createContext, ReactNode, useEffect, useState } from "react";
import { adaptedUserData } from "@/components/ui/login-form/utils";
import {
  IAdaptedLoginFormData,
  ILoginFormData,
} from "@/components/ui/login-form/LoginForm.interface";
import { AuthService } from "@/services/auth.service";
import { deleteAccessToken, setAccessToken } from "@/utils/utils";
import { AuthorizationStatus } from "@/types/state.interface";

interface IAuthContextProps {
  login: (
    data: ILoginFormData,
    rememberMe: boolean
  ) => Promise<{ success: boolean } | void>;
  logout: () => Promise<void>;
  authStatus: AuthorizationStatus;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<AuthorizationStatus>(
    AuthorizationStatus.Unknown
  );

  // Проверка авторизации при первой загрузке
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Попробуйте получить информацию о пользователе с помощью сохраненного токена
        const response = await AuthService.checkAuthStatus();

        if (response.status === 200) {
          setAuthStatus(AuthorizationStatus.Auth);
        } else {
          setAuthStatus(AuthorizationStatus.NoAuth);
          deleteAccessToken();
        }
      } catch (error) {
        // console.error("Error check auth AuthContext:", error.message);
        setAuthStatus(AuthorizationStatus.NoAuth);
        deleteAccessToken();
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (data: ILoginFormData, rememberMe: boolean) => {
    const formattedUserData: IAdaptedLoginFormData = adaptedUserData(data);

    try {
      const response = await AuthService.login(formattedUserData);

      if (response.status === 200) {
        const accessToken = response.data.access_token;
        setAccessToken(accessToken, rememberMe);

        // Устанавливаем пользователя и статус
        setAuthStatus(AuthorizationStatus.Auth);

        // Успешно выполненный вход
        console.log("Вход совершен");

        return { success: true };
      } else {
        console.error("Login failed:", response.error);
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();

      // Успешно выполненный выход
      console.log("Выход совершен");
    } catch (error) {
      console.error(
        "Failed to logout:",
        error.response?.data.detail || error.message
      );
    } finally {
      deleteAccessToken();
      setAuthStatus(AuthorizationStatus.NoAuth);
    }
  };

  const value = {
    login,
    logout,
    authStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
