import { z } from "zod";
import { ILoginFormData } from "./LoginForm.interface";
import { PasswordRegex } from "@/const/const";

export const loginSchema = z.object({
  email: z.string().email({ message: "Неверный формат email адреса." }),
  password: z.string().length(8, { message: "Пароль должен быть 8 символов." })
    .regex(PasswordRegex, { message: "Неверный формат пароля." }),
});

export type LoginFormDataType = z.infer<typeof loginSchema>;

export const formDefaultValues: ILoginFormData = {
  email: "",
  password: "",
};

export const adaptedUserData = (userData: ILoginFormData) => {
  const adaptedData = {
    username: userData.email,
    password: userData.password,
  };

  return adaptedData;
}

