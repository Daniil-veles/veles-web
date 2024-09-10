// I пользователя
export interface UserBaseData {
    email: string;
    phone: string;
    picture: string;
}

// I пользователя из формы регистрации
export interface UserFormData extends UserBaseData {
    password: string;
    firstName: string;
    lastName: string;
    birthDate: string;
}

// I пользователя адаптированного для отправки на сервер
export interface AdaptedUserFormDataToServer extends UserBaseData {
    password: string;
    is_active: boolean | null;
    is_superuser: boolean | null;
    is_verified: boolean | null;
    username: string;
    birth_date: string;
}

// I пользователя, получаемого с сервера
export interface UserDataFromServer extends UserBaseData {
    id: number | null;
    is_active: boolean | null;
    is_superuser: boolean | null;
    is_verified: boolean | null;
    username: string;
    birth_date: string;
}

// I пользователя для сохранения в сторе
export interface AdaptToUserData extends UserBaseData {
    id: number | null;
    isActive: boolean;
    isSuperuser: boolean;
    isVerified: boolean;
    fullName: string;
    birthDate: string;
}