import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    name: '',               // Имя организации
    phone: '',              // Телефон (возможно форматировать через маску)
    email: '',              // Email
    address: '',            // Физический адрес организации
    location: '',           // Местоположение организации
    info: '',               // Общая информация об организации
    name_legal: '',         // Юридическое имя организации
    INN: '',                // ИНН
    KPP: '',                // КПП
    OGRN: '',               // ОГРН
    OKPO: '',               // ОКПО
    BIK: '',                // БИК
    bank_name: '',          // Название банка
    bank_address: '',       // Адрес банка
    corr_account: '',       // Корреспондентский счёт
    employees: [],
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setOrganizationInfo(state, action) {
            return { ...state, ...action.payload };
        },
    }
});

export const { setOrganizationInfo } = userSlice.actions;
export default userSlice.reducer;