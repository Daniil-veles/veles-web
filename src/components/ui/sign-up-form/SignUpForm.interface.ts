export interface UserData {
    email: string;
    password: string;
    fullName: string;
    firstName: string;
    lastName: string;
    phone: string;
    picture: string;
    birthDate: string;
}

export interface AdaptedUserData {
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