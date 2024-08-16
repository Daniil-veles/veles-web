import { useState } from "react";
import { useRouter } from "next/router";
import ResetKeyForm from "../reset-key-form/ResetKeyForm";
import ResetPasswordForm from "../reset-password-form/ResetPasswordForm";
import { CircleArrowLeft } from "lucide-react";
import { getUserEmail } from "@/utils/utils";

const ResetPasswordWrapper: React.FC = () => {
  const [tokenVerified, setTokenVerified] = useState<string | null>(null);
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const router = useRouter();

  const userEmail = getUserEmail();

  async function handleSubmitKey(data: { key: string }) {
    console.log("Код отправлен:", data.key);
    try {
      setIsTokenVerified(true);
      setTokenVerified(data.key);
    } catch (error) {
      console.error("Ошибка при проверке кода:", error);
    }
  }

  async function handleSubmitPassword(data: {
    password: string;
    confirmPassword: string;
  }) {
    const newData = {
      email: userEmail,
      token: tokenVerified,
      password: data.password,
    };

    try {
      // Пример сброса пароля
      // const response = await AuthService.resetPassword(data);
      // if (response.status === 200) {
      //   router.push("/auth/success");
      // }
      console.log("Пароль сброшен:", newData);
    } catch (error) {
      console.error("Ошибка при сбросе пароля:", error);
    }
  }

  return (
    <>
      <button
        className="flex text-gray-500 hover:text-blue-700 py-2 mb-2"
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
