import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formDefaultValues, SignUpFormDataType, signUpSchema } from "./utils";
import { useRouter } from "next/router";
import { AuthService } from "@/services/auth.service";
import { adaptToServerUserFormData } from "@/utils/utils";
import ButtonForm from "../custom-button/button-form/ButtonForm";
import CustomInput from "../custom-input/CustomInput";
import { ISignUpFormData } from "./SignUpForm.interface";

const SignUpForm: React.FC = () => {
  const router = useRouter();

  const { control, handleSubmit, reset } = useForm<SignUpFormDataType>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  async function onSubmit(data: ISignUpFormData) {
    const userData = {
      ...data,
      picture: "",
    };

    const formattedUserData = adaptToServerUserFormData(userData);
    console.log(formattedUserData);

    try {
      // Моковая регистрация
      // router.push("/auth/login");

      const response = await AuthService.registration(formattedUserData);
      console.log(response);

      if (response.status === 201) {
        console.log("User created successfully:", response.data);

        // Сбрасывает поля формы
        reset({ phone: "7" });

        // Перенаправялет на страницу Логин
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                className=""
                fieldData={{
                  id: "first-name",
                  name: "firstName",
                  label: "Имя",
                  placeholder: "Павел",
                  type: "text",
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
            name="lastName"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                className=""
                fieldData={{
                  id: "last-name",
                  name: "lastName",
                  label: "Фамилия",
                  placeholder: "Петров",
                  type: "text",
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
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                className=""
                fieldData={{
                  id: "email",
                  name: "email",
                  label: "Почта",
                  placeholder: "m@example.com",
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
                maxLength={8}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                className=""
                fieldData={{
                  id: "phone",
                  name: "phone",
                  label: "Телефон",
                  placeholder: "7 (123) 456 78 90",
                  type: "tel",
                }}
                fieldValue={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={fieldState.error}
                required
                maxLength={12}
              />
            )}
          />

          <Controller
            name="birthDate"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                className=""
                fieldData={{
                  id: "birthDate",
                  name: "birthDate",
                  label: "Дата рождения",
                  placeholder: "22.06.1990",
                  type: "date",
                }}
                fieldValue={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={fieldState.error}
                required
              />
            )}
          />
        </div>

        <div className="flex justify-center">
          <ButtonForm className="w-full h-min">Зарегистрироваться</ButtonForm>
        </div>

        <small className="text-center text-gray-500">
          Нажимая «Зарегистрироваться», вы соглашаетесь с условиями обработки
          персональных данных
        </small>
      </div>
    </form>
  );
};

export default SignUpForm;
