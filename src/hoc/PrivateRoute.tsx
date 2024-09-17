import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import { AuthorizationStatus } from "@/types/state.interface";
import Loading from "@/screens/loading/Loading";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const { authStatus } = useAuth();

  useEffect(() => {
    if (authStatus !== AuthorizationStatus.Auth) {
      router.push("/auth/login"); // Перенаправление на страницу входа, если пользователь не авторизован
    }
  }, [authStatus, router]);

  if (authStatus === AuthorizationStatus.Auth) {
    return <>{children}</>; // Возвращаем дочерние компоненты, если пользователь авторизован
  }

  return <Loading />;
};

export default PrivateRoute;
