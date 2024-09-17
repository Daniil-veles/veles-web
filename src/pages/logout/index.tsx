import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LogOutPage: React.FC = () => {
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    async function handleLogout() {
      try {
        await logout();
        console.log("Выход совершен");

        router.push('/auth/login');
      } catch (error) {
        console.error("Failed to logout:", error.message);
      }
    }

    handleLogout();
  }, [logout, router]);

  return null;
};

export default LogOutPage;
