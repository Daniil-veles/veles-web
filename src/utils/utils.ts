import { AdaptedUserFormData, AdaptToUserData, UserFormData, UserServerData } from "@/types/user.interface";

// Формирует метатег названия страницы
export const getMetaTitle = (title: string) => `${title} | Велесъ`;

// Работа с токеном
export const setAccessToken = (token: string) => localStorage.setItem('accessToken', token);
export const getAccessToken = () => localStorage.getItem('accessToken');
export const deleteAccessToken = () => localStorage.removeItem('accessToken');

// Сброс пароля по почте
export const setUserEmail = (email: string) => localStorage.setItem('userResetEmail', email);
export const getUserEmail = () => localStorage.getItem('userResetEmail');
export const deleteUserEmail = () => localStorage.removeItem('userResetEmail');

// Вычисляет положение плашки меню 
export function getIndicatorStyle(activeItem: HTMLElement, parentElement: HTMLElement): React.CSSProperties {
  const rect = activeItem.getBoundingClientRect();
  const parentRect = parentElement.getBoundingClientRect();

  return {
    top: `${rect.top - parentRect.top}px`,
    left: `${rect.left - parentRect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  };
}

// Преобразование данных: данные в приложени=> данные с сервера
export function adaptToServerUserFormData(data: UserFormData): AdaptedUserFormData {
  const adaptedData = {
    email: data.email,
    password: data.password,
    is_active: true,
    is_superuser: false,
    is_verified: false,
    full_name: `${data.firstName} ${data.lastName}`,
    phone: data.phone,
    picture: data.picture,
    birth_date: data.birthDate,
  };

  return adaptedData;
}

// Преобразование данных: данные с сервера => данные в приложении
export function adaptToUserData(data: UserServerData): AdaptToUserData {
  const adaptedData = {
    id: data.id,
    email: data.email,
    isActive: data.is_active ?? false,
    isSuperuser: data.is_superuser ?? false,
    isVerified: data.is_verified ?? false,
    fullName: data.full_name,
    phone: data.phone,
    picture: data.picture,
    birthDate: data.birth_date,
  };

  return adaptedData;
}

// Юзер
// vdsgdhs@mail.ru
// 23323222
