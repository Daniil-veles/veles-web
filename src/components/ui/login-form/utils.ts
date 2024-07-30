import { z } from "zod";
import { UserLoginData } from "./LoginForm.interface";
import { ComponentFormEnum } from "@/types/types.interface";

export const loginSchema = z.object({
    email: z.string().email({ message: "Неверный формат email адреса." }),
    password: z.string().length(8, { message: "Пароль должен быть 8 символов." }).regex(/^(?=.*[a-z])(?=.*[0-9]).+$/i, { message: "Неверный формат email адреса." }),
});

export const adaptedUserData = (userData: UserLoginData) => {
    const adaptedData = {
        username: userData.email,
        password: userData.password,
    };

    return adaptedData;
}

export const loginFormFields = [
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

export type LoginFormValues = z.infer<typeof schema>;

