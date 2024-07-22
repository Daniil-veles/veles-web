import { userListItems } from "@/const/const";
import { AdaptedUserFormData, AdaptToUserData, UserFormData, UserServerData } from "@/types/user.interface";

const getMetaTitle = (title: string) => `${title} | Велесъ`;

const setAccessToken = (token: string) => localStorage.setItem('accessToken', token);
const getAccessToken = () => localStorage.getItem('accessToken');
const deleteAccessToken = () => localStorage.removeItem('accessToken');

function getIndicatorStyle(activeItem: HTMLElement, parentElement: HTMLElement): React.CSSProperties {
  const rect = activeItem.getBoundingClientRect();
  const parentRect = parentElement.getBoundingClientRect();

  return {
    top: `${rect.top - parentRect.top}px`,
    left: `${rect.left - parentRect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  };
}


// Преобразование данных: данные в приложени=> данные с сервера
export function adaptUserFormData(data: UserFormData): AdaptedUserFormData {
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
function adaptToUserData(data: UserServerData): AdaptToUserData {
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


// function getCategoryLinkByUserMenu(activeId: number) {
//   const categoryName = userListItems.find(item => item.id === activeId)?.text || "";
//   let link = "?category=";

//   switch (categoryName) {
//     case "Организация":
//       link += "organization";
//       break;
//     case "Сотрудники":
//       link += "employee";
//       break;
//     case "Тарифный план":
//       link += "tariff";
//       break;
//     case "Настройки":
//       link += "settings";
//       break;

//     default:
//       link = "";
//       break;
//   }

//   return link;
// }


export { getMetaTitle, setAccessToken, getAccessToken, deleteAccessToken, getIndicatorStyle, adaptToUserData };


// Юзер
// vdsgdhs@mail.ru
// 23323222
