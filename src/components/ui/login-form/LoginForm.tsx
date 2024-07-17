import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../button";
import FormField from "../form-field/FormField";
import { adaptedUserData, LoginFormValues } from "./utils";
import { UserService } from "@/services/user.service";
import { AdaptedUserLoginData } from "./LoginForm.interface";
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // vdsgdhs@mail.ru
  // 23323222

  const router = useRouter();

  async function onSubmit(data: LoginFormValues) {
    const formattedUserData: AdaptedUserLoginData = adaptedUserData(data);
    // console.log(formattedUserData);

    try {
      const response = await UserService.login(formattedUserData);
      console.log(response.data);

      if (response.status === 200) {
        methods.reset();

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

          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
