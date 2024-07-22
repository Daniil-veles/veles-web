import { number } from "zod";

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
}



// Общий интерфейс пользователя
export interface UserBaseData {
    email: string;
    phone: string;
    picture: string;
    birthDate: string;
}

// Интерфейс для формы регистрации/входа пользователя
export interface UserFormData extends UserBaseData {
    password: string;
    fullName: string;
    firstName: string;
    lastName: string;
}

// Интерфейс для данных адаптированных из сервера
export interface AdaptedUserFormData extends UserBaseData {
    password: string;
    is_active: boolean | null;
    is_superuser: boolean | null;
    is_verified: boolean | null;
    full_name: string;
}

// Интерфейс для данных пользователя, получаемых с сервера
export interface UserServerData extends UserBaseData {
    id: number;
    is_active: boolean | null;
    is_superuser: boolean | null;
    is_verified: boolean | null;
    full_name: string;
    birth_date: string;
}

// Интерфейс для адаптированных данных пользователя
export interface AdaptToUserData extends UserBaseData {
    id: number | null;
    isActive: boolean | null;
    isSuperuser: boolean | null;
    isVerified: boolean | null;
    fullName: string;
}
