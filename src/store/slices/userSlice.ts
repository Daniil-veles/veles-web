import { UserSliceState } from '@/types/state.interface';
import { AdaptToUserData } from '@/types/user.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserSliceState = {
    id: null,
    email: '',
    fullName: '',
    birthDate: '',
    phone: '',
    isActive: false,
    isSuperuser: false,
    isVerified: false,
    picture: '',
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
    }
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;