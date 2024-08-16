import { AdaptedUserFormData, AdaptToUserData, UserFormData, UserServerData } from "@/types/user.interface";

export const getMetaTitle = (title: string) => `${title} | Велесъ`;

export const setAccessToken = (token: string) => localStorage.setItem('accessToken', token);
export const getAccessToken = () => localStorage.getItem('accessToken');
export const deleteAccessToken = () => localStorage.removeItem('accessToken');

export const setUserEmail = (email: string) => localStorage.setItem('userResetEmail', email);
export const getUserEmail = () => localStorage.getItem('userResetEmail');
export const deleteUserEmail = () => localStorage.removeItem('userResetEmail');


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

export const enum AdaptToServerUserData {
  FullName = 'full_name',
  IsActive = 'is_active',
  IsSuperuser = 'is_superuser',
  IsVerified = 'is_verified',
  BirthDate = 'birth_date',
  Email = 'email',
  Phone = 'phone',
  Picture = 'picture',
  Id = 'id',
}

export const toServerDataMapping: { [key in keyof AdaptToUserData]: AdaptToServerUserData } = {
  id: AdaptToServerUserData.Id,
  email: AdaptToServerUserData.Email,
  fullName: AdaptToServerUserData.FullName,
  isActive: AdaptToServerUserData.IsActive,
  isSuperuser: AdaptToServerUserData.IsSuperuser,
  isVerified: AdaptToServerUserData.IsVerified,
  birthDate: AdaptToServerUserData.BirthDate,
  phone: AdaptToServerUserData.Phone,
  picture: AdaptToServerUserData.Picture,
};

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
  return {
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
}



// Юзер
// vdsgdhs@mail.ru
// 23323222
