import { z } from "zod";
import { OrganizationType } from "./OrganizationScreenCreateForm.interface";

// Функция для проверки валидности email
const emailArraySchema = z.array(
    z.string().email({ message: "Неверный адрес электронной почты." })
);

// Функция для проверки строки, содержащей email'ы, разделенные запятыми
const employeesSchema = z.string()
    .nonempty({ message: "Как минимум один сотрудник обязателен." })
    .transform(value => value.split(',').map(email => email.trim()))
    .refine(emails => emailArraySchema.safeParse(emails).success, {
        message: "Адрес электронной почты указан некорректно."
    });


const baseSchema = z.object({
    type: z.enum(
        [
            "ООО", // Общество с ограниченной ответственностью (ООО)
            "АО", // Акционерное общество (АО)
            "ТНВ", // Товарищество на вере (ТНВ)
            "ИП", // Индивидуальный предприниматель (ИП)
        ],
        { message: "Тип обязателен." }
    ),
    name: z.string().min(1, { message: "Имя обязательно." }),
    phone: z
        .string(),
    email: z.string().email({ message: "Неверный адрес электронной почты." }),
    address: z.string().min(1, { message: "Адрес обязателен." }),
    location: z.string().min(1, { message: "Местоположение обязательно." }),
    info: z.string().min(1, { message: "Информация обязательна." }),
    name_legal: z.string().min(1, { message: "Юридическое имя обязательно." }),
    BIK: z.string().min(1, { message: "БИК обязателен." }),
    bank_name: z.string().min(1, { message: "Название банка обязательно." }),
    bank_address: z.string().min(1, { message: "Адрес банка обязателен." }),
    corr_account: z
        .string()
        .min(1, { message: "Корреспондентский счёт обязателен." }),
    employees: employeesSchema,
});

// Дополнительные поля для юридических лиц
const additionalFields = {
    entity: z.object({
        OGRN: z
            .string()
            .length(13, { message: "ОГРН должен содержать 13 символов." })
            .regex(/^\d+$/, { message: "ОГРН должен содержать только цифры." }),
        OKPO: z
            .string()
            .length(8, { message: "ОКПО должен содержать 8 символов." })
            .regex(/^\d+$/, { message: "ОКПО должен содержать только цифры." }),
        INN: z
            .string()
            .length(10, { message: "ИНН должен содержать 10 символов." })
            .regex(/^\d+$/, { message: "ИНН должен содержать только цифры." }),
        KPP: z
            .string()
            .length(9, { message: "КПП должен содержать 9 символов." })
            .regex(/^\d+$/, { message: "КПП должен содержать только цифры." }),
    }),
    individual: z.object({
        OGRN: z
            .string()
            .length(15, { message: "ОГРНИП должен содержать 15 символов." })
            .regex(/^\d+$/, { message: "ОГРНИП должен содержать только цифры." }),
        INN: z
            .string()
            .length(12, { message: "ИНН должен содержать 12 символов." })
            .regex(/^\d+$/, { message: "ИНН должен содержать только цифры." }),
        OKPO: z
            .string()
            .length(10, { message: "ОКПО должен содержать 10 символов." })
            .regex(/^\d+$/, { message: "ОКПО должен содержать только цифры." }),
    }),
};

// Функция для создания схемы валидации на основе типа организации
const createFormValidation = (type: OrganizationType) => {
    const isEntity = ["ООО", "АО", "ТНВ"].includes(type) ? "entity" : "individual";
    const fullSchema = baseSchema.merge(additionalFields[isEntity]);
    return fullSchema;
};
