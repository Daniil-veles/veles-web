import { AuthorizationStatus, UserInfo } from '@/types/state.interface';
import { AdaptToUserData } from '@/types/user.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserInfo = {
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
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo(state, action: PayloadAction<AdaptToUserData>) {
            state = { ...state, ...action.payload }
        },
        clearUserInfo(state) {
            state = initialState;
        },
        setAuthStatus(state, action: PayloadAction<AuthorizationStatus>) {
            state.isAuth = action.payload;
        },
    }
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;