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


// Определяем тип для ключей объекта
export type CategoryKeys = 'profile' | 'organization' | 'employee' | 'tariff' | 'settings';


export enum ComponentFormEnum {
    INPUT = "input",
    SELECT = "select",
    PHONE = "phone",
}

interface IBaseFormField {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    validation?: RegisterOptions;
    defaultValue?: string;
}

interface IInputFormField extends IBaseFormField {
    type?: string; // Например, text, password, email и т.д.
    componentType: ComponentFormEnum.INPUT;
}

interface ISelectFormField extends IBaseFormField {
    options: { label: string; value: string }[];
    componentType: ComponentFormEnum.SELECT;
}

interface IPhoneFormField extends IBaseFormField {
    country?: string;
    onlyCountries?: string[];
    componentType: ComponentFormEnum.PHONE;
}

export type IFormField = IInputFormField | ISelectFormField | IPhoneFormField;


// Интерфейсы для состояния поля и модального окна
export interface FieldState {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    type: string;
    componentType: ComponentFormEnum;
}

export interface ModalState {
    isOpen: boolean;
    title: string;
    buttonText: string;
    field: IFormField;
}
