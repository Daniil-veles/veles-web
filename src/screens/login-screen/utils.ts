import { z } from "zod";

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
        .string()
        .regex(/^(?:\+7|8)\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/, {
            message:
                "Неверный формат телефона. Пример: +7 (123) 456-78-90 или 8 (123) 456-78-90.",
        }),
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
    employees: z
        .array(z.string())
        .nonempty({ message: "Как минимум один сотрудник обязателен." }),
});

// Дополнительные поля для юридических лиц
const additionalFields = {
    entity: z.object({
        OGRN: z
            .string()
            .length(13, { message: "ОГРН должен содержать 13 символов." }),
        OKPO: z
            .string()
            .length(8, { message: "ОКПО должен содержать 8 символов." }),
        INN: z
            .string()
            .length(10, { message: "ИНН должен содержать 10 символов." }),
        KPP: z.string().length(9, { message: "КПП должен содержать 9 символов." }),
    }),
    individual: z.object({
        OGRN: z
            .string()
            .length(15, { message: "ОГРНИП должен содержать 15 символов." }),
        INN: z
            .string()
            .length(12, { message: "ИНН должен содержать 12 символов." }),
        OKPO: z
            .string()
            .length(10, { message: "ОКПО должен содержать 10 символов." }),
    }),
};


// Определение типа для типов организаций
export type OrganizationType = "ООО" | "АО" | "ТНВ" | "ИП";

// Функция для создания схемы валидации на основе типа организации
const createFormValidation = (type: OrganizationType) => {
    const isEntity = ["ООО", "АО", "ТНВ"].includes(type) ? "entity" : "individual";
    const fullSchema = baseSchema.merge(additionalFields[isEntity]);
    return fullSchema;
};

interface Option {
    label: string;
    value: string;
}

interface OrganizationSelect {
    name: string;
    label: string;
    placeholder: string;
    options: Option[];
}


const organizationSelect: OrganizationSelect = {
    name: "type",
    label: "Организационная структура",
    placeholder: "Выберите тип",
    options: [
        { label: "Общество с ограниченной ответственностью (ООО)", value: "ООО" },
        { label: "Акционерное общество (АО)", value: "АО" },
        { label: "Товарищество на вере (ТНВ)", value: "ТНВ" },
        { label: "Индивидуальный предприниматель (ИП)", value: "ИП" },
    ],
};

interface Field {
    name: string;
    label: string;
    placeholder: string;
}

const fields: Field[] = [
    { name: "name", label: "Имя", placeholder: "Введите имя" },
    { name: "phone", label: "Телефон", placeholder: "Введите телефон" },
    { name: "email", label: "Email", placeholder: "Введите email" },
    { name: "address", label: "Адрес", placeholder: "Введите адрес" },
    {
        name: "location",
        label: "Местоположение",
        placeholder: "Введите местоположение",
    },
    { name: "info", label: "Информация", placeholder: "Введите информацию" },
    {
        name: "name_legal",
        label: "Юридическое имя",
        placeholder: "Введите юридическое имя",
    },
    { name: "INN", label: "ИНН", placeholder: "Введите ИНН" },
    { name: "KPP", label: "КПП", placeholder: "Введите КПП" },
    { name: "OGRN", label: "ОГРН", placeholder: "Введите ОГРН" },
    { name: "OKPO", label: "ОКПО", placeholder: "Введите ОКПО" },
    { name: "BIK", label: "БИК", placeholder: "Введите БИК" },
    {
        name: "bank_name",
        label: "Название банка",
        placeholder: "Введите название банка",
    },
    {
        name: "bank_address",
        label: "Адрес банка",
        placeholder: "Введите адрес банка",
    },
    {
        name: "corr_account",
        label: "Корреспондентский счёт",
        placeholder: "Введите корреспондентский счёт",
    },
    {
        name: "employees",
        label: "Сотрудники",
        placeholder: "Введите сотрудников через запятую",
    },
];

export { baseSchema, additionalFields, createFormValidation, organizationSelect, fields };