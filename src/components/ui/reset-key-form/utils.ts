import { z } from "zod";

// Схема валидации для ввода кода
export const resetKeySchema = z.object({
    key: z.string().length(6, { message: "Код должен быть 6 символов." }),
});

export type ResetKeyFormDataType = z.infer<typeof resetKeySchema>;

export const formDefaultValues = {
    key: "",
};