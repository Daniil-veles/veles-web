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
        setUserInfo(state, action: PayloadAction<Partial<AdaptToUserData>>) {
            return { ...state, ...action.payload };
        },
        clearUserInfo() {
            return initialState;
        },
        setAuthStatus(state, action: PayloadAction<AuthorizationStatus>) {
            state.isAuth = action.payload;
        },
    }
});

export const { setUserInfo, clearUserInfo, setAuthStatus } = userSlice.actions;
export default userSlice.reducer;