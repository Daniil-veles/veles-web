const getMetaTitle = (title: string) => `${title} | Велесъ`;

const setAccessToken = (token: string) => localStorage.setItem('accessToken', token);
const getAccessToken = () => localStorage.getItem('accessToken');
const deleteAccessToken = () => localStorage.removeItem('accessToken');

export { getMetaTitle, setAccessToken, getAccessToken, deleteAccessToken };


// Юзер
// birth_date: "2233-03-31"
// email: "vdsgdhs@mail.ru"
// full_name: "dsdsds sasasasa"
// is_active: true
// is_superuser: false
// is_verified: false
// password: "23323222"
// phone: "3233233456"
// picture: ""
