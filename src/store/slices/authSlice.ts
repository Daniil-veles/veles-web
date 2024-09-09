import { AuthorizationStatus, AuthSliceState } from '@/types/state.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthSliceState = {
    isAuth: AuthorizationStatus.Auth
};
const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus(state, action: PayloadAction<AuthorizationStatus>) {
            state.isAuth = action.payload;
        },
    }
});

export const { setAuthStatus } = userSlice.actions;
export default userSlice.reducer;