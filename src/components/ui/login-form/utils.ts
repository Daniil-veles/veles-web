import { z } from "zod";
import { UserLoginData } from "./LoginForm.interface";
import { ComponentFormEnum, IFormField } from "@/types/form.interface";
import { PasswordRegex } from "@/const/const";

export const loginSchema = z.object({
  email: z.string().email({ message: "Неверный формат email адреса." }),
  password: z.string().length(8, { message: "Пароль должен быть 8 символов." })
    .regex(PasswordRegex, { message: "Неверный формат пароля." }),
});

export const adaptedUserData = (userData: UserLoginData) => {
  const adaptedData = {
    username: userData.email,
    password: userData.password,
  };

  return adaptedData;
}

export const loginFormFields: IFormField[] = [
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'm@example.com',
    type: 'email',
    componentType: ComponentFormEnum.INPUT,
    required: true,
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    placeholder: '*****',
    type: 'password',
    componentType: ComponentFormEnum.INPUT,
    required: true,
  },
];


export type LoginFormValues = z.infer<typeof loginSchema>;

