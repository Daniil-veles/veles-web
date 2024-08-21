import { AdaptedUserFormDataToServer, AdaptToUserData, UserDataFromServer, UserFormData } from "@/types/user.interface";

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


// Преобразование данных: данные в приложени=> данные с сервера
export function adaptToServerUserFormData(data: UserFormData): AdaptedUserFormDataToServer {
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
export function adaptToUserData(data: UserDataFromServer): AdaptToUserData {
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
