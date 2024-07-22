import { AuthorizationStatus, UserInfo } from '@/types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userInfo: UserInfo;
}

const initialState: UserState = {
    userInfo: {
        id: null,
        email: '',
        fullName: '',
        birthDate: '',
        phone: '',
        isActive: false,
        isSuperuser: false,
        isVerified: false,
        picture: '',
        isAuth: AuthorizationStatus.Unknown
    }
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo(state, action: PayloadAction<UserInfo>) {
            return { ...state.userInfo, ...action.payload }
        },
        clearUserInfo(state) {
            return initialState
        },
        setAuthStatus(state, action: PayloadAction<UserInfo>) {
            return { ...state.userInfo, ...action.payload }
        },
    }
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;