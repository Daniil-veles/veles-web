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
  

export { getMetaTitle, setAccessToken, getAccessToken, deleteAccessToken, getIndicatorStyle };


// Юзер
// vdsgdhs@mail.ru
// 23323222
