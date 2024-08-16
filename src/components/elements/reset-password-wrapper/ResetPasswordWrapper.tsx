import { useState } from "react";
import { useRouter } from "next/router";
import ResetKeyForm from "../reset-key-form/ResetKeyForm";
import ResetPasswordForm from "../reset-password-form/ResetPasswordForm";
import { CircleArrowLeft } from "lucide-react";

const ResetPasswordWrapper: React.FC = () => {
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const router = useRouter();

  async function handleSubmitKey(data: { key: string }) {
    console.log("Код отправлен:", data.key);
    try {
      // Пример проверки кода
      // const response = await AuthService.verifyResetCode(data.key);
      // if (response.status === 200) {
        // }
        setIsTokenVerified(true);
    } catch (error) {
      console.error("Ошибка при проверке кода:", error);
    }
  }

  async function handleSubmitPassword(data: {
    password: string;
    confirmPassword: string;
  }) {
    console.log("Пароль сброшен:", data.password);
    try {
      // Пример сброса пароля
      // const response = await AuthService.resetPassword(data);
      // if (response.status === 200) {
      //   router.push("/auth/success");
      // }
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
