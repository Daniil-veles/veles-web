import { z } from "zod";

export const schema = z.object({
    email: z.string().email({ message: "Неверный формат email адреса." }),
    password: z.string().length(8, { message: "Пароль должен быть 8 символов." }).regex(/^(?=.*[a-z])(?=.*[0-9]).+$/i, { message: "Неверный формат email адреса." }),
});

export type LoginFormValues = z.infer<typeof schema>;

