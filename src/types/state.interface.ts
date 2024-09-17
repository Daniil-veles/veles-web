export const enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export interface UserInfo {
    id: number | null;
    email: string;
    fullName: string;
    birthDate: string;
    phone: string;
    isActive: boolean;
    isSuperuser: boolean;
    isVerified: boolean;
    picture: string;
    isAuth: AuthorizationStatus;
}

export interface UserSliceState {
    id: number | null;
    email: string;
    fullName: string;
    birthDate: string;
    phone: string;
    isActive: boolean;
    isSuperuser: boolean;
    isVerified: boolean;
    picture: string;
}

export interface AuthSliceState {
    isAuth: AuthorizationStatus;
}
