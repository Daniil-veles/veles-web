// import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { IAuthContextProps } from "./AuthContext.interface";
import { useRouter } from "next/router";
import {
  adaptedUserData,
  LoginFormValues,
} from "@/components/ui/login-form/utils";
import { AdaptedUserLoginData } from "@/components/ui/login-form/LoginForm.interface";
import { AuthService } from "@/services/auth.service";
import { AdaptedUserFormData } from "@/types/user.interface";
import { deleteAccessToken, getAccessToken } from "@/utils/utils";

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<AdaptedUserFormData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Проверка аутентификации при загрузке приложения
    const checkAuth = async () => {
      try {
        const token = getAccessToken();

        if (token) {
          // const response = await AuthService.checkAuth();

          if (response.status === 200) {
            setUser(response.data.user);
            setAccessToken(response.data.access_token);
          }
        }
      } catch (error) {
        console.error("Failed to check auth:", error);
      }
    };

    // checkAuth();
    // setIsAuth(true);
  }, []);

  console.log(user);

  const login = async (data: LoginFormValues) => {
    const formattedUserData: AdaptedUserLoginData = adaptedUserData(data);

    try {
      const response = await AuthService.login(formattedUserData);

      if (response.status === 200) {
        setUser(response.data.user);
        setAccessToken(response.data.access_token);
        setIsAuth(true);

        router.push("/user"); // Перенаправление после успешного входа

        // Успешно выполненный вход
        console.log("Login successful:", response);
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const logout = async () => {
    try {
      const response = await AuthService.logout();
      setUser(null);
      deleteAccessToken();
      setIsAuth(false);

      router.push("/login"); // Перенаправление после выхода

      // Успешно выполненный выход
      console.log("Logout successful:", response);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
