import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userAddressReducer from "./slices/userAddressSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        userAddress: userAddressReducer,
    }
})