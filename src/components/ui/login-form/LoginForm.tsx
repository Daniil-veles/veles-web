import { FormProvider, useForm } from "react-hook-form";
import FormField from "../form-field/FormField";
import {
  adaptedUserData,
  loginFormFields,
  LoginFormValues,
  loginSchema,
} from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import ButtonForm from "../custom-button/button-form/ButtonForm";
import { useAppDispatch } from "@/hooks";
import { AuthorizationStatus } from "@/types/state.interface";
import { setAccessToken } from "@/utils/utils";
import { AuthService } from "@/services/auth.service";
import { ArrowRight, MoveRight } from "lucide-react";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormValues) {
    // const formattedUserData: IAdaptedUserLoginData = adaptedUserData(data);

    try {
      // const response = await AuthService.login(formattedUserData);

      // if (response.status === 200) {
      //   const accessToken = response.data.access_token;

      // Моковый токен
      const accessToken = "123456";
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      setAccessToken(accessToken);

      //   // Успешно выполненный вход
      //   console.log("Login successful:", response);
      // }

      methods.reset();
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          {loginFormFields
            ? loginFormFields.map((field) => (
                <div key={field.name} className="grid gap-2">
                  <FormField key={field.name} value={field} />
                </div>
              ))
            : null}

          <div className="flex justify-between">
            <span>
              <input className="mr-2" type="checkbox" name="" id="" />
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
    </FormProvider>
  );
};

export default LoginForm;
