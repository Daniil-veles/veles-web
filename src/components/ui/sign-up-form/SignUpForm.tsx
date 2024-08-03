import { FormProvider, useForm } from "react-hook-form";
import FormField from "../form-field/FormField";
import { Button } from "../button";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormFields, SignUpFormValues, signUpSchema } from "./utils";
import { useRouter } from "next/router";
import { AuthService } from "@/services/auth.service";
import { adaptUserFormData } from "@/utils/utils";

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const methods = useForm<SignUpFormValues>({
    mode: "onChange",
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "+7",
      birthDate: "",
    },
  });

  async function onSubmit(data: SignUpFormValues) {
    const userData = {
      ...data,
      picture: "",
      fullName: "",
    };

    const formattedUserData = adaptUserFormData(userData);
    // console.log(formattedUserData);

    try {
      const response = await AuthService.registration(formattedUserData);

      if (response.status === 201) {
        console.log("User created successfully:", response.data);

        // Сбрасывает поля формы
        methods.reset({ phone: "+7" });

        // Перенаправялет на страницу Логин
        router.push("/login");
      }
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            {signUpFormFields
              ? signUpFormFields.map((field) => (
                  <FormField key={field.name} value={field} />
                ))
              : null}
          </div>

          <Button type="submit" className="w-full bg-blue-500 text-white">
            Create an account
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
