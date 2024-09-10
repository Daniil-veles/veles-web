import { RegisterOptions } from "react-hook-form";

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
    className?: string;
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