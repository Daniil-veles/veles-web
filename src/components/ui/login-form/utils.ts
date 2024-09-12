import { z } from "zod";
import { ILoginFormData } from "./LoginForm.interface";
import { PasswordRegex } from "@/const/const";

export const loginSchema = z.object({
  email: z.string().email({ message: "Неверный формат email адреса." }),
  password: z.string().length(8, { message: "Пароль должен быть 8 символов." })
    .regex(PasswordRegex, { message: "Неверный формат пароля." }),
});

export const adaptedUserData = (userData: ILoginFormData) => {
  const adaptedData = {
    username: userData.email,
    password: userData.password,
  };

  return adaptedData;
}

// export const loginFormFields: IFormField[] = [
//   {
//     id: 'email',
//     name: 'email',
//     label: 'Email',
//     placeholder: 'm@example.com',
//     type: 'email',
//     componentType: ComponentFormEnum.INPUT,
//     required: true,
//     className: ''
//   },
//   {
//     id: 'password',
//     name: 'password',
//     label: 'Password',
//     placeholder: '*****',
//     type: 'password',
//     componentType: ComponentFormEnum.INPUT,
//     required: true,
//     className: ''
//   },
// ];


export type LoginFormDataType = z.infer<typeof loginSchema>;

