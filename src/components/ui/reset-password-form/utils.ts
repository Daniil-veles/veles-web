import { PasswordRegex } from "@/const/const";
import { z } from "zod";

// Схема валидации для сброса пароля
export const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .length(8, { message: "Пароль должен быть 8 символов." })
            .regex(PasswordRegex, {
                message: "Пароль должен содержать как минимум одну цифру и одну букву.",
            }),
        confirmPassword: z
            .string()
            .length(8, { message: "Пароль должен быть 8 символов." }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Пароли не совпадают",
    });

export type ResetPasswordFormDataType = z.infer<typeof resetPasswordSchema>;

export const formDefaultValues = {
    password: "",
    confirmPassword: "",
};