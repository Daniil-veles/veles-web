import { Controller, useForm } from "react-hook-form";
import {
  adaptedUserData,
  LoginFormDataType,
  loginSchema,
} from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import ButtonForm from "../custom-button/button-form/ButtonForm";
import { useAppDispatch } from "@/hooks";
import { AuthorizationStatus } from "@/types/state.interface";
import { setAccessToken } from "@/utils/utils";
import { AuthService } from "@/services/auth.service";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { setAuthStatus } from "@/store/slices/authSlice";
import { useRouter } from "next/router";
import { IAdaptedLoginFormData, ILoginFormData } from "./LoginForm.interface";
import CustomInput from "../custom-input/CustomInput";

const formDefaultValues: ILoginFormData = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  const { control, handleSubmit, reset } = useForm<LoginFormDataType>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  // const methods = useForm({
  //   mode: "onChange",
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  async function onSubmit(data: ILoginFormData) {
    const formattedUserData: IAdaptedLoginFormData = adaptedUserData(data);

    try {
      const response = await AuthService.login(formattedUserData);

      if (response.status === 200) {
        // Моковый токен
        // const accessToken = "123456";

        dispatch(setAuthStatus(AuthorizationStatus.Auth));

        // Cохраняет токен в зависимости от состояния rememberMe в local или session
        const accessToken = response.data.access_token;
        setAccessToken(accessToken, rememberMe);

        // Сбрасывает поля формы
        reset();

        // Перенаправялет на страницу Профиль
        router.push("/profile");

        // Успешно выполненный вход
        console.log("Login successful:", response);
      }
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  // {
    //     id: 'email',
    //     name: 'email',
    //     label: 'Email',
    //     placeholder: 'm@example.com',
    //     type: 'email',
    //     componentType: ComponentFormEnum.INPUT,
    //     required: true,
    //     className: ''
    //   },
    //   {
    //     id: 'password',
    //     name: 'password',
    //     label: 'Password',
    //     placeholder: '*****',
    //     type: 'password',
    //     componentType: ComponentFormEnum.INPUT,
    //     required: true,
    //     className: ''
    //   },

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

        {/* {loginFormFields
            ? loginFormFields.map((field) => (
                <div key={field.name} className="grid gap-2">
                  <FormField key={field.name} value={field} />
                </div>
              ))
            : null} */}

        <div className="flex justify-between">
          <span>
            <input
              className="mr-2"
              type="checkbox"
              onChange={(e) => setRememberMe(e.target.checked)}
              checked={rememberMe}
            />
            Remember
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
