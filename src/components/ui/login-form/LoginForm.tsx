import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../button";
import FormField from "../form-field/FormField";
import { adaptedUserData, loginFormFields, LoginFormValues, loginSchema } from "./utils";
import { AdaptedUserLoginData } from "./LoginForm.interface";
import { useRouter } from "next/router";
import { setAccessToken } from "@/utils/utils";
import { AuthService } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm: React.FC = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(loginSchema), 
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(data: LoginFormValues) {
    const formattedUserData: AdaptedUserLoginData = adaptedUserData(data);

    try {
      const response = await AuthService.login(formattedUserData);

      if (response.status === 200) {
        console.log(response.data);

        methods.reset();

        setAccessToken(response.data.access_token);
        router.push("/user");
      }
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

          <Button type="submit" className="w-full bg-blue-500 text-white">
            Login
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
