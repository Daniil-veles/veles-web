import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../button";
import FormField from "../form-field/FormField";
import { loginFormFields, LoginFormValues, loginSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/provider/AuthContext";
import ButtonForm from "../custom-button/button-form/ButtonForm";

const LoginForm: React.FC = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const authContext = useContext(AuthContext);

  if (!authContext) {
    console.error("AuthContext is not available");
    return null;
  }

  const { login } = authContext; // Получаем метод login из контекста

  async function onSubmit(data: LoginFormValues) {
    try {      
      await login(data);

      methods.reset();
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <FormProvider {...methods}>
      <form className="mb-2" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          {loginFormFields
            ? loginFormFields.map((field) => (
                <div key={field.name} className="grid gap-2">
                  <FormField key={field.name} value={field} />
                </div>
              ))
            : null}

          <ButtonForm className="w-full h-min">Войти</ButtonForm>
        </div>
      </form>

      <Link
        href={"/auth/forgot-password"}
        className="w-full text-center text-gray-500 hover:text-blue-800 underline underline-offset-4 py-1"
      >
        Не помню пароль
      </Link>
    </FormProvider>
  );
};

export default LoginForm;
