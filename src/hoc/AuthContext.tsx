// import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect } from "react";
import { IAuthContextProps } from "./AuthContext.interface";
import { useRouter } from "next/router";
import {
  adaptedUserData,
  LoginFormValues,
} from "@/components/ui/login-form/utils";
import { AdaptedUserLoginData } from "@/components/ui/login-form/LoginForm.interface";
import { AuthService } from "@/services/auth.service";
import {
  deleteAccessToken,
  setAccessToken,
} from "@/utils/utils";
import { useAppDispatch } from "@/hooks";
import {
  setAuthStatus,
  setUserInfo,
} from "@/store/slices/userSlice";
import { AuthorizationStatus } from "@/types/state.interface";

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const token = getAccessToken();

  //     if (token) {
  //       const response = await AuthService.checkAuth();
  //       if (response.status === 200) {
  //         dispatch(setAuthStatus(AuthorizationStatus.Auth));
  //       } else {
  //         dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  //       }
  //     } else {
  //       dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  //     }
  //   };

  //   // checkAuth();
  // }, [dispatch]);

  const login = async (data: LoginFormValues) => {
    const formattedUserData: AdaptedUserLoginData = adaptedUserData(data);

    try {
      const response = await AuthService.login(formattedUserData);

      if (response.status === 200) {
        const accessToken = response.data.access_token;
        dispatch(setAuthStatus(AuthorizationStatus.Auth));
        setAccessToken(accessToken);

        router.push("/dashboard/profile"); // Перенаправление после успешного входа

        // Успешно выполненный вход
        console.log("Login successful:", response);
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const logout = async () => {
    try {
      deleteAccessToken();

      const response = await AuthService.logout();
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));

      router.push("/auth/login"); // Перенаправление после выхода

      // Успешно выполненный выход
      console.log("Logout successful:", response);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
