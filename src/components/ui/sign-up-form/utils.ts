import { ComponentFormEnum } from "@/types/types.interface";
import { z } from "zod";

export const signUpSchema = z.object({
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
        .string(),
    birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Дата рождения должна быть в формате ДД-ММ-ГГГГ." }),
});


export const loginFormFields = [
    {
        id: 'first-name',
        name: 'first-name',
        label: 'Имя',
        placeholder: 'Павел',
        type: 'text',
        componentType: ComponentFormEnum.INPUT,
        required: true,
    },
    {
        id: 'last-name',
        name: 'last-name',
        label: 'Фамилия',
        placeholder: 'Петров',
        type: 'text',
        componentType: ComponentFormEnum.INPUT,
        required: true,
    },
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
    {
        id: 'phone',
        name: 'phone',
        label: 'Телефон',
        placeholder: '+7 (123) 456 78 90',
        componentType: ComponentFormEnum.PHONE,
        required: true,
        country: "ru",
        onlyCountries: ["ru", "by", "kz"],
    },
    {
        id: 'date',
        name: 'birthDate',
        label: 'Дата рождения',
        placeholder: '22.06.1990',
        type: 'date',
        componentType: ComponentFormEnum.INPUT,
        required: true,
    },
];

export type SignUpFormValues = z.infer<typeof signUpSchema>;
