export interface ICustomInput {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    type: string;
}

export interface IOption {
    value: string;
    name: string;
}

export interface ICustomSelect<T> {
    id: string;
    name: string;
    label?: string;
    options: T[];
}
