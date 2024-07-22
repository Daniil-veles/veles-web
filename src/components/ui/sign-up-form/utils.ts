import { z } from "zod";

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
        .string(),
    birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Дата рождения должна быть в формате ДД-ММ-ГГГГ." }),
});

export type SignUpFormValues = z.infer<typeof schema>;
