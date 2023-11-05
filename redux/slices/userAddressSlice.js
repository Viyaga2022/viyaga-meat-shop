import { createSlice } from "@reduxjs/toolkit";
import {
    getAllAddressesOfUser, getSingleAddressesOfUser, addUserAddress,
    updUserAddress, deleteUserAddress
} from "../services/userAddressServices";

const initialState = {
    userAddresses: [],
    isAddressModalVisible: false,
    isAddressLoding: false,
    addUserAddressddressSuccessMsg: null,
    addressErrorMsg: null,
}

const userAddressSlice = createSlice({
    name: 'userAddress',
    initialState,
    reducers: {
        setAddress: (state,action) => {
            state.userAddresses = action.payload
        },
        setAddressModalVisible:(state,action) => {
            state.isAddressModalVisible = action.payload
        },
        resetAddress:(state) => {
            state.isAddressLoding = false
            state.addressErrorMsg = null
            state.addressSuccessMsg = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUserAddress.pending, (state) => {
                state.isAddressLoding = true
            })
            .addCase(addUserAddress.fulfilled, (state, action) => {
                state.isAddressLoding = false
                state.userAddresses = action.payload.address
                state.addressSuccessMsg = action.payload.message
            })
            .addCase(addUserAddress.rejected, (state, action) => {
                state.isAddressLoding = false
                state.addressErrorMsg = action.payload
            })
            .addCase(updUserAddress.pending, (state) => {
                state.isAddressLoding = true
            })
            .addCase(updUserAddress.fulfilled, (state, action) => {
                state.isAddressLoding = false
                state.userAddresses = action.payload.address
                state.addressSuccessMsg = action.payload.message
            })
            .addCase(updUserAddress.rejected, (state, action) => {
                state.isAddressLoding = false
                state.addressErrorMsg = action.payload
            })
            .addCase(deleteUserAddress.pending, (state) => {
                state.isAddressLoding = true
            })
            .addCase(deleteUserAddress.fulfilled, (state, action) => {
                state.isAddressLoding = false
                state.userAddresses = action.payload.address
            })
            .addCase(deleteUserAddress.rejected, (state, action) => {
                state.isAddressLoding = false
                state.addressErrorMsg = action.payload
            })
    }
})

export { addUserAddress, updUserAddress, deleteUserAddress}
export const {setAddress, setAddressModalVisible, resetAddress} = userAddressSlice.actions
export default userAddressSlice.reducer