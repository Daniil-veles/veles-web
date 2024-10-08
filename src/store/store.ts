import { NameSpace } from "@/const/const";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
        [NameSpace.User]: userReducer,
        //
    },
    devTools: process.env.IS_DEV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;