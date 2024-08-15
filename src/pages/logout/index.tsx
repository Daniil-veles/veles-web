import { AuthContext } from "@/hoc/AuthContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const LogOut: React.FC = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (!authContext) {
      console.error("AuthContext is not available");
      router.push("/auth/login");
      return;
    }

    const { logout } = authContext;

    async function handleLogout() {
      try {
        await logout();
        console.log("Выход совершен");
      } catch (error) {
        console.error(
          "Failed to logout:",
          error.response?.data || error.message
        );
        router.push("/auth/login");
      }
    }

    handleLogout();
  }, [authContext, router]);

  return null;
};

export default LogOut;
