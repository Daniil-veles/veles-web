import { z } from "zod";

export const forgotPasswordSchema = z.object({
    email: z.string().email({ message: "Неверный формат email адреса." }),
});

export type ForgotPasswordFormDataType = z.infer<typeof forgotPasswordSchema>;

export const formDefaultValues = {
    email: "",
};
