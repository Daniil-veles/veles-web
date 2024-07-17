import { z } from "zod";
import { UserLoginData } from "./LoginForm.interface";

export const schema = z.object({
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

export type LoginFormValues = z.infer<typeof schema>;

