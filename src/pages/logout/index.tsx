import { AuthService } from "@/services/auth.service";
import { deleteAccessToken } from "@/utils/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LogOut: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    async function handleLogout() {
      try {
        const response = await AuthService.logout();

        // Успешно выполненный выход
        console.log("Logout successful:", response);

        deleteAccessToken();
        router.push("/login");
      } catch (error) {
        console.error("Ошибка при выходе:", error.message);
      }
    }

    handleLogout();
  }, [router]);

  return "";
};

export default LogOut;
