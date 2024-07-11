
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
    birthDate: string | null;
  }