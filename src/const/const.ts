import { BadgeRussianRuble, Blocks, CirclePlus, HousePlus, LucideProps, User, Users } from "lucide-react";

export const menu = [
    {
        'id': 1,
        'text': 'О продукте',
        'link': '#about',
    },
    {
        'id': 2,
        'text': 'Преимущества',
        'link': '#features',
    },
    {
        'id': 3,
        'text': 'Тарифный план',
        'link': '#rate',
    },
    {
        'id': 4,
        'text': 'Вопросы',
        'link': '#faq',
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
    'User': User,
    'CirclePlus': CirclePlus,
    'Users': Users,
    'BadgeRussianRuble': BadgeRussianRuble,
    'Blocks': Blocks,
    'HousePlus': HousePlus,
};


export const userListItems = [
    { id: 1, iconName: 'User', text: 'Профиль', link: 'profile' },
    { id: 2, iconName: 'CirclePlus', text: 'Организация', link: 'organization' },
    { id: 3, iconName: 'Users', text: 'Сотрудники', link: 'employee' },
    { id: 4, iconName: 'HousePlus', text: 'Объекты', link: 'objects' },
    { id: 5, iconName: 'BadgeRussianRuble', text: 'Тарифный план', link: 'tariff' },
];

export const enum NameSpace {
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


export const exampleOrgData = [
    {
        name: "Company A",
        phone: "+1234567890",
        email: "contact@companya.com",
        address: "123 Business St, City A, Country",
        info: "Leading provider of business solutions.",
        type: "LLC",
        INN: "123456789012",
        KPP: "123456789",
        OGRN: "1234567890123",
        OKPO: "12345678",
        BIK: "123456789",
        corr_account: "12345678901234567890",
        employees: 100,
    },
    {
        name: "Company B",
        phone: "+0987654321",
        email: "info@companyb.com",
        address: "456 Industry Rd, City B, Country",
        info: "Innovative tech solutions and services.",
        type: "JSC",
        INN: "987654321098",
        KPP: "987654321",
        OGRN: "9876543210987",
        OKPO: "87654321",
        BIK: "987654321",
        corr_account: "98765432109876543210",
        employees: 200,
    },
    {
        name: "Company C",
        phone: "+1122334455",
        email: "support@companyc.com",
        address: "789 Market Ave, City C, Country",
        info: "Retail and distribution of consumer goods.",
        type: "Partnership",
        INN: "112233445566",
        KPP: "112233445",
        OGRN: "1122334455667",
        OKPO: "54321098",
        BIK: "112233445",
        corr_account: "11223344556677889900",
        employees: 50,
    },
    {
        name: "Company D",
        phone: "+5566778899",
        email: "contact@companyd.com",
        address: "321 Tech Park, City D, Country",
        info: "Specializing in software development and IT services.",
        type: "Sole Proprietorship",
        INN: "665544332211",
        KPP: "665544332",
        OGRN: "6655443322116",
        OKPO: "87654321",
        BIK: "665544332",
        corr_account: "66554433221166554433",
        employees: 75,
    },
];

// texts.ts
export const personInfoVerifiedTexts = {
    email: {
        modalTitle: "Подтвердите вашу почту",
        verificationText: (email: string) => `Для завершения регистрации и доступа ко всем функциям нашего сервиса, пожалуйста, подтвердите вашу электронную почту. На указанный адрес: ${email} было отправлено письмо с инструкциями по подтверждению. Если вы не получили письмо, проверьте папку "Спам" или нажмите кнопку ниже, чтобы отправить письмо повторно.`,
        modalButtonText: "Отправить письмо повторно",
    },

    phone: {
        modalTitle: "Подтвердите ваш телефон",
        verificationText: (phone: string) => `Для завершения регистрации и доступа ко всем функциям нашего сервиса, пожалуйста, подтвердите ваш номер телефона. На указанный номер: ${phone} было отправлено SMS с кодом подтверждения. Если вы не получили SMS, нажмите кнопку ниже, чтобы отправить код повторно.`,
        modalButtonText: "Отправить код повторно",
    },

    // Добавьте другие тексты, если необходимо
};
