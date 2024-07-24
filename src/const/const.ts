import { BadgeRussianRuble, CirclePlus, LucideProps, Settings, Users } from "lucide-react";

export const menu = [
    {
        'id': 1,
        'text': 'Главная',
        'link': '/',
    },
    {
        'id': 2,
        'text': 'О продукте',
        'link': '#',
    },
    {
        'id': 3,
        'text': 'Преимущества',
        'link': '#',
    },
    {
        'id': 4,
        'text': 'Тарифный план',
        'link': '#',
    },
];

export const features = [
    {
        'id': 1,
        'img': '/404.png',
        'title': 'Next.js',
        'description': 'The React Framework for Production',
    },
    {
        'id': 2,
        'img': '/404.png',
        'title': 'React.js',
        'description': 'Server and client components.',
    },
    {
        'id': 3,
        'img': '/404.png',
        'title': 'Authentication',
        'description': 'Credential authentication with password reset and email validation',
    },
    {
        'id': 4,
        'img': '/404.png',
        'title': 'Database',
        'description': 'Drizzle with postgres database',
    },
    {
        'id': 5,
        'img': '/404.png',
        'title': 'TypeSafe Backend',
        'description': 'Preserve type safety from backend to frontend with tRPC',
    },
    {
        'id': 6,
        'img': '/404.png',
        'title': 'Subscription',
        'description': 'Subscription with stripe',
    },
    {
        'id': 7,
        'img': '/404.png',
        'title': 'Tailwindcss',
        'description': 'Simple and elegant UI components built with Tailwind CSS',
    },
];

export const rates = [
    {
        id: 1,
        title: 'Стартовый',
        price: 15000,
        text: 'Это моковый текст для описания продукта.',
        options: [
            {
                id: 1,
                text: 'Это моковый текст для опции 1.',
            },
            {
                id: 2,
                text: 'Это моковый текст для опции 2.',
            },
            {
                id: 3,
                text: 'Это моковый текст для опции 3.',
            },
            {
                id: 4,
                text: 'Это моковый текст для опции 4.',
            },
        ],
    },
    {
        id: 2,
        title: 'Профессиональный',
        price: 45000,
        text: 'Это моковый текст для описания продукта.',
        options: [
            {
                id: 1,
                text: 'Это моковый текст для опции 1.',
            },
            {
                id: 2,
                text: 'Это моковый текст для опции 2.',
            },
            {
                id: 3,
                text: 'Это моковый текст для опции 3.',
            },
            {
                id: 4,
                text: 'Это моковый текст для опции 4.',
            },
            {
                id: 5,
                text: 'Это моковый текст для опции 5.',
            },
            {
                id: 6,
                text: 'Это моковый текст для опции 6.',
            },
        ],
    },
    {
        id: 3,
        title: 'Коммерческий',
        price: 115000,
        text: 'Продукт класс. Это моковый текст для описания продукта.',
        options: [
            {
                id: 1,
                text: 'Это моковый текст для опции 1.',
            },
            {
                id: 2,
                text: 'Это моковый текст для опции 2.',
            },
            {
                id: 3,
                text: 'Это моковый текст для опции 3.',
            },
            {
                id: 4,
                text: 'Это моковый текст для опции 4.',
            },
            {
                id: 5,
                text: 'Это моковый текст для опции 5.',
            },
            {
                id: 6,
                text: 'Это моковый текст для опции 6.',
            },
        ],
    }
];

export const carousel = [
    {
        id: 1,
        text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
        img: '/img-1.png'
    },
    {
        id: 2,
        text: 'Text-2 Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
        img: '/img-2.png'
    },
    {
        id: 3,
        text: 'Text-3 Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
        img: '/img-3.png'
    },
    {
        id: 4,
        text: 'Text-4 Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
        img: '/img-4.png'
    },
    {
        id: 5,
        text: 'Text-5 Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
        img: '/img-5.png'
    },
];

export const iconMap: Record<string, React.ElementType<LucideProps>> = {
    'CirclePlus': CirclePlus,
    'Users': Users,
    'BadgeRussianRuble': BadgeRussianRuble,
    'Settings': Settings,
};

export const userListItems = [
    { id: 1, iconName: 'CirclePlus', text: 'Организация', link: 'organization' },
    { id: 2, iconName: 'Users', text: 'Сотрудники', link: 'employee' },
    { id: 3, iconName: 'BadgeRussianRuble', text: 'Тарифный план', link: 'tariff' },
    { id: 4, iconName: 'Settings', text: 'Настройки', link: 'settings' },
];

export enum NameSpace {
    Main = 'MAIN',
    Data = 'DATA',
    User = 'USER',
}

export const LOCAL_STORAGE_KEY_ORGANIZATION = 'organizationFormData';
export const LOCAL_STORAGE_USER_MENU_CATEGORY = 'userMenuCategory';

export const companyInfoFields = [
    { field: 'Организационная структура', value: 'type' },
    { field: 'Имя', value: 'name' },
    { field: 'Телефон', value: 'phone' },
    { field: 'Email', value: 'email' },
    { field: 'Адрес', value: 'address' },
    { field: 'Местоположение', value: 'location' },
    { field: 'Информация', value: 'info' },
    { field: 'Юридическое имя', value: 'name_legal' },
    { field: 'ИНН', value: 'INN' },
    { field: 'КПП', value: 'KPP' },
    { field: 'ОГРН', value: 'OGRN' },
    { field: 'ОКПО', value: 'OKPO' },
    { field: 'БИК', value: 'BIK' },
    { field: 'Название банка', value: 'bank_name' },
    { field: 'Адрес банка', value: 'bank_address' },
    { field: 'Корреспондентский счёт', value: 'corr_account' },
    // { field: 'Сотрудники', value: 'director' }
]
