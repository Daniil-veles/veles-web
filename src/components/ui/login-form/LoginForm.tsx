import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../button";
import FormField from "../form-field/FormField";
import { loginFormFields, LoginFormValues, loginSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "@/hoc/AuthContext";

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
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          {loginFormFields
            ? loginFormFields.map((field) => (
                <div key={field.name} className="grid gap-2">
                  <FormField key={field.name} value={field} />
                </div>
              ))
            : null}

          <Button
            type="submit"
            className="w-full h-full text-base py-4 bg-blue-500 text-white rounded-full"
          >
            Login
          </Button>

          <p className="text-center text-gray-500 underline underline-offset-4">Не помню пароль</p>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
