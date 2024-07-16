// import { useRouter } from "next/router";
import { createContext, ReactNode, useState } from "react";
import { IAuthContextProps } from "./AuthContext.interface";
import { AdaptedUserData } from "@/components/ui/sign-up-form/SignUpForm.interface";

const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AdaptedUserData | null>(null);
  //   const router = useRouter();
//   console.log(user);
  

  const login = async (username: string, password: string) => {
    // Логика входа
    // const loggedInUser = {
    //   id: "1",
    //   name: "John Doe",
    //   email: "john@example.com",
    // }; // Пример пользователя
    // setUser(loggedInUser);
  };

  const logout = async () => {
    // Логика выхода
    // setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
