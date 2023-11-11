import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userAddressReducer from "./slices/userAddressSlice";
import commonReducer from "./slices/commonSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        common: commonReducer,
        userAddress: userAddressReducer,
    }
})