const getMetaTitle = (title: string) => `${title} | Велесъ`;

const setAccessToken = (token: string) => localStorage.setItem('accessToken', token);
const getAccessToken = () => localStorage.getItem('accessToken');
const deleteAccessToken = () => localStorage.removeItem('accessToken');

export { getMetaTitle, setAccessToken, getAccessToken, deleteAccessToken };


// Юзер
// vdsgdhs@mail.ru
// 23323222
