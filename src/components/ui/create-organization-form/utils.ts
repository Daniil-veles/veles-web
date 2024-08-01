import { z } from "zod";
import { OrganizationType } from "./CreateOrganizationForm.interface";
import { ComponentFormEnum, IFormField } from "@/types/types.interface";

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


const organizationSelect: IFormField = {
    id: "type",
    name: "type",
    label: "Организационная структура",
    placeholder: "Выберите тип",
    componentType: ComponentFormEnum.SELECT,
    options: [
        { label: "Общество с ограниченной ответственностью (ООО)", value: "ООО" },
        { label: "Акционерное общество (АО)", value: "АО" },
        { label: "Товарищество на вере (ТНВ)", value: "ТНВ" },
        { label: "Индивидуальный предприниматель (ИП)", value: "ИП" },
    ],
};

const createOrganizationFields: IFormField[] = [
    { id: "name", name: "name", label: "Имя", placeholder: "Введите имя", componentType: ComponentFormEnum.INPUT },
    {
        id: "phone", name: "phone", label: "Телефон", placeholder: "Введите телефон", componentType: ComponentFormEnum.PHONE, country: "ru",
        onlyCountries: ["ru", "by", "kz"],
    },
    { id: "email", name: "email", label: "Email", placeholder: "Введите email", componentType: ComponentFormEnum.INPUT },
    { id: "address", name: "address", label: "Адрес", placeholder: "Введите адрес", componentType: ComponentFormEnum.INPUT },
    { id: "location", name: "location", label: "Местоположение", placeholder: "Введите местоположение", componentType: ComponentFormEnum.INPUT },
    { id: "info", name: "info", label: "Информация", placeholder: "Введите информацию", componentType: ComponentFormEnum.INPUT },
    { id: "name_legal", name: "name_legal", label: "Юридическое имя", placeholder: "Введите юридическое имя", componentType: ComponentFormEnum.INPUT },
    { id: "INN", name: "INN", label: "ИНН", placeholder: "Введите ИНН", componentType: ComponentFormEnum.INPUT },
    { id: "KPP", name: "KPP", label: "КПП", placeholder: "Введите КПП", componentType: ComponentFormEnum.INPUT },
    { id: "OGRN", name: "OGRN", label: "ОГРН", placeholder: "Введите ОГРН", componentType: ComponentFormEnum.INPUT },
    { id: "OKPO", name: "OKPO", label: "ОКПО", placeholder: "Введите ОКПО", componentType: ComponentFormEnum.INPUT },
    { id: "BIK", name: "BIK", label: "БИК", placeholder: "Введите БИК", componentType: ComponentFormEnum.INPUT },
    { id: "bank_name", name: "bank_name", label: "Название банка", placeholder: "Введите название банка", componentType: ComponentFormEnum.INPUT },
    { id: "bank_address", name: "bank_address", label: "Адрес банка", placeholder: "Введите адрес банка", componentType: ComponentFormEnum.INPUT },
    { id: "corr_account", name: "corr_account", label: "Корреспондентский счёт", placeholder: "Введите корреспондентский счёт", componentType: ComponentFormEnum.INPUT },
    { id: "employees", name: "employees", label: "Сотрудники", placeholder: "Введите сотрудников через запятую", componentType: ComponentFormEnum.INPUT },
];


const createFormFields = (formSchema: z.ZodObject<any, any, any, any>): IFormField[] => {
    const schema = formSchema;

    const formFields = createOrganizationFields.filter(
        (field) => schema.shape[field.name] !== undefined
    );

    return formFields;
};


export { baseSchema, additionalFields, createFormValidation, organizationSelect, createOrganizationFields, createFormFields };