import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../button";
import FormField from "../form-field/FormField";
import styles from "./LoginForm.module.scss";

// interface ILoginFormProps {}

const LoginForm: React.FC = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log("Войти");
  };

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
