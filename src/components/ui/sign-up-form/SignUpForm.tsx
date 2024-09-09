import { FormProvider, useForm } from "react-hook-form";
import FormField from "../form-field/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormFields, SignUpFormValues, signUpSchema } from "./utils";
import { useRouter } from "next/router";
import { AuthService } from "@/services/auth.service";
import { adaptToServerUserFormData } from "@/utils/utils";
import ButtonForm from "../custom-button/button-form/ButtonForm";

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

    const formattedUserData = adaptToServerUserFormData(userData);
    // console.log(formattedUserData);

    try {
      console.log(userData);

      // const response = await AuthService.registration(formattedUserData);
      // console.log(response);

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

          <ButtonForm className="w-full h-min">Зарегистрироваться</ButtonForm>

          <small className="text-center text-gray-500">
            Нажимая «Зарегистрироваться», вы соглашаетесь с условиями обработки
            персональных данных
          </small>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
