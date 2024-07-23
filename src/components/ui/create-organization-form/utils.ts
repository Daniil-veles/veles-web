import { z } from "zod";
import { Field, OrganizationSelect, OrganizationType } from "./CreateOrganizationForm.interface";
import { ComponentFormEnum } from "../form-field/FormField";

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


const organizationSelect: OrganizationSelect = {
    name: "type",
    label: "Организационная структура",
    placeholder: "Выберите тип",
    type: ComponentFormEnum.SELECT,
    options: [
        { label: "Общество с ограниченной ответственностью (ООО)", value: "ООО" },
        { label: "Акционерное общество (АО)", value: "АО" },
        { label: "Товарищество на вере (ТНВ)", value: "ТНВ" },
        { label: "Индивидуальный предприниматель (ИП)", value: "ИП" },
    ],
};

const createOrganizationFields: Field[] = [
    { name: "name", label: "Имя", placeholder: "Введите имя", type: ComponentFormEnum.INPUT },
    { name: "phone", label: "Телефон", placeholder: "Введите телефон", type: ComponentFormEnum.PHONE },
    { name: "email", label: "Email", placeholder: "Введите email", type: ComponentFormEnum.INPUT },
    { name: "address", label: "Адрес", placeholder: "Введите адрес", type: ComponentFormEnum.INPUT },
    { name: "location", label: "Местоположение", placeholder: "Введите местоположение", type: ComponentFormEnum.INPUT },
    { name: "info", label: "Информация", placeholder: "Введите информацию", type: ComponentFormEnum.INPUT },
    { name: "name_legal", label: "Юридическое имя", placeholder: "Введите юридическое имя", type: ComponentFormEnum.INPUT },
    { name: "INN", label: "ИНН", placeholder: "Введите ИНН", type: ComponentFormEnum.INPUT },
    { name: "KPP", label: "КПП", placeholder: "Введите КПП", type: ComponentFormEnum.INPUT },
    { name: "OGRN", label: "ОГРН", placeholder: "Введите ОГРН", type: ComponentFormEnum.INPUT },
    { name: "OKPO", label: "ОКПО", placeholder: "Введите ОКПО", type: ComponentFormEnum.INPUT },
    { name: "BIK", label: "БИК", placeholder: "Введите БИК", type: ComponentFormEnum.INPUT },
    { name: "bank_name", label: "Название банка", placeholder: "Введите название банка", type: ComponentFormEnum.INPUT },
    { name: "bank_address", label: "Адрес банка", placeholder: "Введите адрес банка", type: ComponentFormEnum.INPUT },
    { name: "corr_account", label: "Корреспондентский счёт", placeholder: "Введите корреспондентский счёт", type: ComponentFormEnum.INPUT },
    { name: "employees", label: "Сотрудники", placeholder: "Введите сотрудников через запятую", type: ComponentFormEnum.INPUT },
];


const createFormFields = (formSchema: z.ZodObject<any, any, any, any>): Field[] => {
    const schema = formSchema;

    const formFields = createOrganizationFields.filter(
        (field) => schema.shape[field.name] !== undefined
    );

    return formFields;
};


export { baseSchema, additionalFields, createFormValidation, organizationSelect, createOrganizationFields, createFormFields };