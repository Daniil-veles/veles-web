
import { BirthDate, LettersOnlyRegex, PasswordRegex, PhoneRegex } from "@/const/const";
import { ComponentFormEnum, IFormField } from "@/types/form.interface";
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


export const signUpFormFields: IFormField[] = [
    {
        id: 'first-name',
        name: 'firstName',
        label: 'Имя',
        placeholder: 'Павел',
        type: 'text',
        componentType: ComponentFormEnum.INPUT,
        required: true,
    },
    {
        id: 'last-name',
        name: 'lastName',
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
        onlyCountries: ["ru", "by"],
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
