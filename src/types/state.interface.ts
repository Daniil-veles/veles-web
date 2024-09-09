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
