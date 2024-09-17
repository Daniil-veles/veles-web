import { BadgeRussianRuble, Blocks, CirclePlus, HousePlus, LucideProps, User, Users } from "lucide-react";

// Константы имен в LOCAL
export const LOCAL_STORAGE_KEY_ORGANIZATION = 'organizationFormData';

// Регулярные выражения
export const PasswordRegex = /^(?=.*[a-z])(?=.*[0-9]).+$/i;
export const PhoneRegex = /^(7)[0-9]{10}$/;
export const LettersOnlyRegex = /^[A-Za-zА-Яа-яЁё]+$/;
export const BirthDate = /^\d{4}-\d{2}-\d{2}$/;


// Главная страница
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


// Пользовательское меню
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

// Slice name
export const enum NameSpace {
    Main = 'MAIN',
    Auth = 'AUTH',
    User = 'USER',
}

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


// Моковые данные
export const exampleOrgData =
{
    name: "ООО Велесъ",
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
};

export const exampleObjectList = [
    {
        title: "Объект 1",
        data: "11.20.2020",
        priority: "high",
        tasks: 100,
        activeTasks: 10,
        employee: [
            { picture: "https://via.placeholder.com/600/92c952", name: "John" },
            { picture: "https://via.placeholder.com/600/92c952", name: "David" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
        ],
    },
    {
        title: "Объект 2",
        data: "11.20.2022",
        priority: "medium",
        tasks: 300,
        activeTasks: 30,
        employee: [
            { picture: "https://via.placeholder.com/600/92c952", name: "John" },
            { picture: "https://via.placeholder.com/600/92c952", name: "David" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
        ],
    },
    {
        title: "Объект3 ",
        data: "11.20.2023",
        priority: "low",
        tasks: 888,
        activeTasks: 88,
        employee: [
            { picture: "https://via.placeholder.com/600/92c952", name: "John" },
            { picture: "https://via.placeholder.com/600/92c952", name: "David" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
        ],
    },
    {
        title: "Объект 4",
        data: "11.20.2023",
        priority: "low",
        tasks: 888,
        activeTasks: 88,
        employee: [
            { picture: "https://via.placeholder.com/600/92c952", name: "John" },
            { picture: "https://via.placeholder.com/600/92c952", name: "David" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
        ],
    },
    {
        title: "Объект 5",
        data: "11.20.2023",
        priority: "low",
        tasks: 888,
        activeTasks: 88,
        employee: [
            { picture: "https://via.placeholder.com/600/92c952", name: "John" },
            { picture: "https://via.placeholder.com/600/92c952", name: "David" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
        ],
    },
    {
        title: "Объект 6",
        data: "11.20.2023",
        priority: "low",
        tasks: 888,
        activeTasks: 88,
        employee: [
            { picture: "https://via.placeholder.com/600/92c952", name: "John" },
            { picture: "https://via.placeholder.com/600/92c952", name: "David" },
            { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
        ],
    },
];

export const exampleTaskList = [
    {
        title: "Разработка пользовательского интерфейса",
        startDate: "2024-09-01",
        finishDate: "2024-09-10",
        status: "В процессе",
    },
    {
        title: "Тестирование системы безопасности",
        startDate: "2024-09-05",
        finishDate: "2024-09-12",
        status: "Завершено",
    },
    {
        title: "Оптимизация базы данных",
        startDate: "2024-08-15",
        finishDate: "2024-08-25",
        status: "В процессе",
    },
    {
        title: "Создание документации для API",
        startDate: "2024-09-02",
        finishDate: "2024-09-05",
        status: "Завершено",
    },
    {
        title: "Внедрение системы мониторинга",
        startDate: "2024-09-03",
        finishDate: "2024-09-15",
        status: "Отложено",
    },
    {
        title: "Рефакторинг кода основного модуля",
        startDate: "2024-08-20",
        finishDate: "2024-08-30",
        status: "Завершено",
    },
    {
        title: "Миграция на новый сервер",
        startDate: "2024-09-10",
        finishDate: "2024-09-17",
        status: "Планируется",
    },
    {
        title: "Настройка CI/CD",
        startDate: "2024-09-11",
        finishDate: "2024-09-18",
        status: "В процессе",
    },
    {
        title: "Проектирование новой архитектуры",
        startDate: "2024-08-25",
        finishDate: "2024-09-05",
        status: "Отложено",
    },
    {
        title: "Анализ требований клиента",
        startDate: "2024-09-01",
        finishDate: "2024-09-08",
        status: "Завершено",
    },
];

export const exampleEmployeeList = [
    {
        avatar: "/images/avatar1.jpg",
        name: "Алексей Иванов",
        position: "Frontend Developer",
        level: "Junior",
    },
    {
        avatar: "/images/avatar2.jpg",
        name: "Мария Смирнова",
        position: "Backend Developer",
        level: "Middle",
    },
    {
        avatar: "/images/avatar3.jpg",
        name: "Дмитрий Кузнецов",
        position: "DevOps Engineer",
        level: "Senior",
    },
    {
        avatar: "/images/avatar4.jpg",
        name: "Анна Попова",
        position: "Project Manager",
        level: "Middle",
    },
    {
        avatar: "/images/avatar5.jpg",
        name: "Екатерина Волкова",
        position: "UI/UX Designer",
        level: "Senior",
    },
    {
        avatar: "/images/avatar6.jpg",
        name: "Павел Соколов",
        position: "QA Engineer",
        level: "Middle",
    },
    {
        avatar: "/images/avatar7.jpg",
        name: "Иван Воробьев",
        position: "Data Scientist",
        level: "Senior",
    },
    {
        avatar: "/images/avatar8.jpg",
        name: "Ольга Михайлова",
        position: "Product Owner",
        level: "Middle",
    },
    {
        avatar: "/images/avatar9.jpg",
        name: "Виктор Сергеев",
        position: "Fullstack Developer",
        level: "Junior",
    },
    {
        avatar: "/images/avatar10.jpg",
        name: "Татьяна Федорова",
        position: "HR Specialist",
        level: "Senior",
    },
]
