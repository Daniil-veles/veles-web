import { createContext, ReactNode, useState } from "react";
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
  login: (data: ILoginFormData, rememberMe: boolean) => Promise<void>;
  logout: () => void;
  isAuth: AuthorizationStatus;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isAuth, setIsAuth] = useState<AuthorizationStatus>(
    AuthorizationStatus.Unknown
  );

  const login = async (data: ILoginFormData, rememberMe: boolean) => {
    const formattedUserData: IAdaptedLoginFormData = adaptedUserData(data);

    try {
      const response = await AuthService.login(formattedUserData);
      console.log(response);

      if (response.status === 200) {
        const accessToken = response.data.access_token;
        setAccessToken(accessToken, rememberMe);

        // Устанавливаем пользователя и статус
        setUser(response.data.user);
        setIsAuth(AuthorizationStatus.Auth);

        // Успешно выполненный вход
        console.log("Login successful:", response);
      } else {
        console.error("Login failed:", response.error);
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const logout = async () => {
    try {
      const response = await AuthService.logout();
      console.log(response);

      deleteAccessToken();
      setUser(null);
      setIsAuth(AuthorizationStatus.NoAuth);

      // Успешно выполненный выход
      console.log("Logout successful:", response);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const value = {
    user,
    login,
    logout,
    isAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
