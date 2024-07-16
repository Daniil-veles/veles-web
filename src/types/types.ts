
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


