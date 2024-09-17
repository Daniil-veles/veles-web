import { Controller, useForm } from "react-hook-form";
import { formDefaultValues, LoginFormDataType, loginSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import ButtonForm from "../custom-button/button-form/ButtonForm";
import { useAuth } from "@/hooks";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/router";
import { ILoginFormData } from "./LoginForm.interface";
import CustomInput from "../custom-input/CustomInput";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [rememberMe, setRememberMe] = useState(false);

  const { control, handleSubmit, reset } = useForm<LoginFormDataType>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  async function onSubmit(data: ILoginFormData) {
    try {
      const response = await login(data, rememberMe);

      if (response?.success) {
        // Сбрасывает поля формы
        reset();

        // Перенаправялет на страницу Профиль
        await router.push("/profile");
      }
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              className=""
              fieldData={{
                id: "email",
                name: "email",
                label: "Электронная почта",
                placeholder: "Введите ваш email",
                type: "email",
              }}
              fieldValue={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error}
              required
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              className=""
              fieldData={{
                id: "password",
                name: "password",
                label: "Пароль",
                placeholder: "*****",
                type: "password",
              }}
              fieldValue={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error}
              required
            />
          )}
        />

        <div className="flex justify-between">
          <span className="flex items-center">
            <input
              className="mr-2"
              type="checkbox"
              onChange={(e) => setRememberMe(e.target.checked)}
              checked={rememberMe}
            />
            Запомнить меня
          </span>

          <Link
            href={"/auth/forgot-password"}
            className=" text-center text-gray-500 hover:text-blue-800 underline underline-offset-4 py-1"
          >
            Не помню пароль
          </Link>
        </div>

        <div className="flex justify-center">
          <ButtonForm className="flex items-center">
            Войти
            <MoveRight className="ml-2" size={16} />
          </ButtonForm>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
