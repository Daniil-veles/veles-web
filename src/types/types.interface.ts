import { RegisterOptions } from "react-hook-form";

export interface HeaderMenu {
    id: number,
    text: string,
    link: string,
}

export interface Feature {
    id: number,
    img: string,
    title: string,
    description: string,
}

export interface Rate {
    id: number;
    title: string;
    price: number;
    text: string;
    options: OptionRate[];
}

export interface OptionRate {
    id: number;
    text: string;
}

export interface UserListItem {
    id: number;
    iconName: string;
    text: string;
    link: string;
}

export enum ComponentFormEnum {
    INPUT = "input",
    SELECT = "select",
    PHONE = "phone",
}

export interface IFormField {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    validation?: RegisterOptions;
    componentType: ComponentFormEnum;
    defaultValue?: string;
    options?: { label: string; value: string }[];
    country?: string;
    onlyCountries?: string[];
}

// Определяем тип для ключей объекта
export type CategoryKeys = 'organization' | 'employee' | 'tariff' | 'settings';

