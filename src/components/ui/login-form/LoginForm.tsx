import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../button";
import FormField from "../form-field/FormField";
import { adaptedUserData, LoginFormValues } from "./utils";
import { AdaptedUserLoginData } from "./LoginForm.interface";
import { useRouter } from "next/router";
import { setAccessToken } from "@/utils/utils";
import { AuthService } from "@/services/auth.service";

const LoginForm: React.FC = () => {
  const methods = useForm({
    mode: "onChange",
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
        router.push('/user');
      }
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="m@example.com"
              componentType="input"
              required
            />
          </div>

          <div className="grid gap-2">
            <FormField
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="*****"
              componentType="input"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-bg-fourth text-c-first">
            Login
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
