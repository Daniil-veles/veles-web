import { NameSpace } from "@/const/const";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import organizationReducer from "./slices/organizationSlice";

const store = configureStore({
    reducer: {
        [NameSpace.User]: userReducer,
        [NameSpace.Organization]: organizationReducer,
        //
    },
    devTools: process.env.IS_DEV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;