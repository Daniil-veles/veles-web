import { z } from "zod";
import { CreateUserRequest, UserData } from "./SignUpForm.interface";

export function adaptUserData(userData: UserData): CreateUserRequest {
    const adaptedData: CreateUserRequest = {
        email: userData.email,
        password: userData.password,
        is_active: true,
        is_superuser: false,
        is_verified: false,
        full_name: `${userData.firstName} ${userData.lastName}`,
        phone: userData.phone,
        picture: userData.picture,
        birth_date: userData.birthDate,
    };

    return adaptedData;
}

export const schema = z.object({
    email: z.string().email({ message: "Неверный формат email адреса." }),
    password: z
        .string()
        .length(8, { message: "Пароль должен быть 8 символов." })
        .regex(/^(?=.*[a-z])(?=.*[0-9]).+$/i, {
            message: "Пароль должен содержать как минимум одну цифру и одну букву.",
        }),
    firstName: z.string().min(2, { message: "Имя обязательное." }),
    lastName: z.string().min(2, { message: "Фамилия обязательное." }),
    phone: z
        .string()
        .min(10, { message: "Телефон должен быть 10 символов." })
        .regex(/^\d{10}$/, {
            message: "Телефон должен содержать только цифры.",
        }),
    birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Дата рождения должна быть в формате ДД-ММ-ГГГГ." }),
});

export type FormValues = z.infer<typeof schema>;
