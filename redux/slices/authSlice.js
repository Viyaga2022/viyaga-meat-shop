import { createSlice } from "@reduxjs/toolkit";
import { register, login, getUserAccount, storeAuthToken, deleteAuthToken } from '../services/authServices'

const initialState = {
    currentUser: null,
    userLoading: false,
    userErrorMsg: null,
    isLoading: false,
    loginSuccessMsg: null,
    loginErrorMsg: null,
    registerSuccessMsg: null,
    registerErrorMsg: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.userLoading = false
            state.userErrorMsg = null
            state.isLoading = false
            state.loginSuccessMsg = null
            state.loginErrorMsg = null
            state.registerSuccessMsg = null
            state.registerErrorMsg = null
        },
        logout: (state) => {
            deleteAuthToken()
            state = {
                currentUser: null,
                userLoading: false,
                userErrorMsg: null,
                isLoading: false,
                loginSuccessMsg: null,
                loginErrorMsg: null,
                registerSuccessMsg: null,
                registerErrorMsg: null,
            }
        },
    },
    extraReducers: (builder) => {
        builder
            // register
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.registerSuccessMsg = action.payload.message
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.registerErrorMsg = action.payload
            })

            // Login
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.loginSuccessMsg = action.payload.message
                storeAuthToken(action.payload.token)
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.loginErrorMsg = action.payload
            })

            //get User Account
            .addCase(getUserAccount.pending, (state) => {
                state.userLoading = true
            })
            .addCase(getUserAccount.fulfilled, (state, action) => {
                state.userLoading = false
                state.currentUser = action.payload.user
            })
            .addCase(getUserAccount.rejected, (state, action) => {
                state.userLoading = false
                state.userErrorMsg = action.payload
            })
    }
})

export { register, login, getUserAccount }
export const { reset, logout } = authSlice.actions
export default authSlice.reducer