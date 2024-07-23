import { z } from "zod";
import { ComponentFormEnum } from "../form-field/FormField";
import { additionalFields, baseSchema, createFormValidation } from "./utils";

// Создайте перечисление для типов организаций
export enum OrganizationTypeEnum {
    ООО = "ООО",
    АО = "АО",
    ТНВ = "ТНВ",
    ИП = "ИП",
}

// Тип для выбора типа организации
export type OrganizationType = keyof typeof OrganizationTypeEnum;

export interface Field {
    name: string;
    label: string;
    placeholder: string;
    type: ComponentFormEnum;
}

export interface Option {
    label: string;
    value: string;
}

export interface OrganizationSelect {
    name: string;
    label: string;
    placeholder: string;
    type: ComponentFormEnum;
    options: Option[];
}

// Определите тип данных на основе основной схемы и дополнительной схемы
export type BaseSchemaType = z.infer<typeof baseSchema>;
export type EntitySchemaType = z.infer<typeof additionalFields.entity>;
export type IndividualSchemaType = z.infer<typeof additionalFields.individual>;

// Определите тип для полной схемы на основе типа организации
export type FullSchemaType<T extends OrganizationType> = T extends "ООО" | "АО" | "ТНВ"
    ? BaseSchemaType & EntitySchemaType
    : T extends "ИП"
    ? BaseSchemaType & IndividualSchemaType
    : BaseSchemaType; // Default fallback


// Определите тип возвращаемого значения функции
export type FormSchemaType = z.infer<ReturnType<typeof createFormValidation>>;