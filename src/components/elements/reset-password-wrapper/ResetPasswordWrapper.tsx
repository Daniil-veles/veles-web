import { useState } from "react";
import { useRouter } from "next/router";
import ResetKeyForm from "../../ui/reset-key-form/ResetKeyForm";
import ResetPasswordForm from "../../ui/reset-password-form/ResetPasswordForm";
import { CircleArrowLeft } from "lucide-react";
import { getUserEmail } from "@/utils/utils";

const ResetPasswordWrapper: React.FC = () => {
  const [tokenVerified, setTokenVerified] = useState<string | null>(null);
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const router = useRouter();

  async function handleSubmitKey(data: { key: string }) {
    try {
      // COMMENT: Замокал ввод кода
      setIsTokenVerified(true);
      setTokenVerified(data.key);
      
      console.log("Код отправлен:", data.key);
    } catch (error) {
      console.error("Ошибка при проверке кода:", error);
    }
  }

  async function handleSubmitPassword(data: {
    password: string;
    confirmPassword: string;
  }) {
    const userEmail = getUserEmail();

    const newData = {
      email: userEmail,
      token: tokenVerified,
      password: data.password,
    };

    try {
      // COMMENT: Замокал сброс пароля
      console.log("Пароль сброшен:", newData);
      router.push("/auth/login");

      // Пример сброса пароля
      // const response = await AuthService.resetPassword(data);
      // if (response.status === 200) {
      //   router.push("/auth/login");
      // }
    } catch (error) {
      console.error("Ошибка при сбросе пароля:", error);
    }
  }

  return (
    <>
      <button
        className="flex items-center text-gray-500 hover:text-c-blue py-2 mb-4"
        onClick={() => router.back()}
      >
        <CircleArrowLeft className="mr-1.5" />
        Вернуться
      </button>

      <h3 className="text-2xl mb-4 text-center">Сбросить пароль</h3>

      {!isTokenVerified ? (
        <ResetKeyForm onSubmit={handleSubmitKey} />
      ) : (
        <ResetPasswordForm onSubmit={handleSubmitPassword} />
      )}
    </>
  );
};

export default ResetPasswordWrapper;
