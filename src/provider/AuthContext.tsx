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
  user: any; // можно уточнить тип, если известно
  login: (
    data: ILoginFormData,
    rememberMe: boolean
  ) => Promise<{ success: boolean } | void>;
  logout: () => void;
  authStatus: AuthorizationStatus;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [authStatus, setAuthStatus] = useState<AuthorizationStatus>(
    AuthorizationStatus.Unknown
  );

  console.log(authStatus);

  // Проверка авторизации при первой загрузке
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Попробуйте получить информацию о пользователе с помощью сохраненного токена
        const response = await AuthService.checkAuthStatus();

        if (response.status === 200) {
          setUser(response.data); // Устанавливаем данные пользователя
          setAuthStatus(AuthorizationStatus.Auth); // Обновляем статус авторизации
        } else {
          setAuthStatus(AuthorizationStatus.NoAuth); // Если токен недействителен, то считаем пользователя неавторизованным
          deleteAccessToken(); // Очищаем токен, если он недействителен
        }
      } catch (error) {
        console.error("Error fetching user info:", error.message);
        setAuthStatus(AuthorizationStatus.NoAuth);
        deleteAccessToken(); // Удаляем токен в случае ошибки
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
        // setUser(response.data.user);
        setAuthStatus(AuthorizationStatus.Auth);

        return { success: true };
      } else {
        console.error("Login failed:", response.error);
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const logout = async () => {
    // try {
    //   await AuthService.logout();
    //   deleteAccessToken();
    //   setUser(null);
    //   setAuthStatus(AuthorizationStatus.NoAuth);
    // } catch (error) {
    //   console.error("Failed to logout:", error.message);
    // }

    try {
      await AuthService.logout(); // Попытка отправить запрос на сервер для выхода
    } catch (error) {
      console.error("Failed to logout:", error.message);
      // Если произошла ошибка, например, 401, всё равно продолжить разлогин на клиенте
    } finally {
      deleteAccessToken(); // Удаление токена независимо от успеха или неудачи
      setUser(null);       // Сброс состояния пользователя
      setAuthStatus(AuthorizationStatus.NoAuth); // Установка статуса неавторизованного пользователя
    }
  };

  const value = {
    user,
    login,
    logout,
    authStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
