
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


export interface UserData {
    email: string;
    password: string;
    isActive: boolean | null;
    isSuperUser: boolean | null;
    isVerified: boolean | null;
    fullName: string;
    firstName: string;
    lastName: string;
    phone: string;
    picture: string;
    birthDate: string;
}

export interface CreateUserRequest {
    email: string;
    password: string;
    is_active: boolean | null;
    is_superuser: boolean | null;
    is_verified: boolean | null;
    full_name: string;
    phone: string;
    picture: string;
    birth_date: string;
}