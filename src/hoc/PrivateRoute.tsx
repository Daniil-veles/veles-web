import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import { AuthorizationStatus } from "@/types/state.interface";
import Loading from "@/screens/loading/Loading";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { authStatus, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && authStatus !== AuthorizationStatus.Auth) {
      router.push("/auth/login"); // Перенаправление на страницу входа, если пользователь не авторизован
    }
  }, [authStatus, isLoading, router]);

  if (isLoading) {
    return <Loading />; // Возвращаем дочерние компоненты, если пользователь авторизован
  }

  if (authStatus === AuthorizationStatus.Auth) {
    return <>{children}</>; // Возвращаем дочерние компоненты, если пользователь авторизован
  }

  return null;
};

export default PrivateRoute;
