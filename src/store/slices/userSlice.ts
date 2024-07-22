import { AuthorizationStatus, UserInfo } from '@/types/state.interface';
import { AdaptToUserData } from '@/types/user.interface';
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
        setUserInfo(state, action: PayloadAction<AdaptToUserData>) {
            state.userInfo = { ...state.userInfo, ...action.payload }
        },
        clearUserInfo(state) {
            state.userInfo = initialState.userInfo;
        },
        setAuthStatus(state, action: PayloadAction<AuthorizationStatus>) {
            state.userInfo.isAuth = action.payload;
        },
    }
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;