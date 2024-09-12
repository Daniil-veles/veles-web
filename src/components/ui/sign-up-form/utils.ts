
import { BirthDate, LettersOnlyRegex, PasswordRegex, PhoneRegex } from "@/const/const";
import { z } from "zod";

export const signUpSchema = z.object({
    email: z.string().email({ message: "Неверный формат email адреса." }),
    password: z
        .string()
        .length(8, { message: "Пароль должен быть 8 символов." })
        .regex(PasswordRegex, {
            message: "Пароль должен содержать как минимум одну цифру и одну букву.",
        }),
    firstName: z.string().min(2, { message: "Имя обязательное." }).refine(value => LettersOnlyRegex.test(value), {
        message: "Имя должно содержать только буквы.",
    }),
    lastName: z.string().min(2, { message: "Фамилия обязательное." }).refine(value => LettersOnlyRegex.test(value), {
        message: "Имя должно содержать только буквы.",
    }),
    phone: z
        .string()
        .refine((value) => PhoneRegex.test(value), {
            message: 'Номер телефона должен содержать ровно 11 цифр',
        }),
    birthDate: z.string().regex(BirthDate, { message: "Дата рождения должна быть в формате ДД-ММ-ГГГГ." }),
});

export type SignUpFormDataType = z.infer<typeof signUpSchema>;

export const formDefaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "7",
    birthDate: "",
};
