import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_URL } from '@env'
import axios from "axios"

const BASE_URL = API_URL + '/userAddress'

const getAllAddressesOfUser = createAsyncThunk(
    'userAddress/getAll',
    async (args, thunkAPI) => {
        try {
            const response = await axios.get(BASE_URL)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

const getSingleAddressesOfUser = createAsyncThunk(
    'userAddress/getOne',
    async (index, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}/${index}`)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

const addUserAddress = createAsyncThunk(
    'userAddress/add',
    async (newAddress, thunkAPI) => {
        try {
            const response = await axios.post(BASE_URL, newAddress)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

const updUserAddress = createAsyncThunk(
    'userAddress/update',
    async (args, thunkAPI) => {
        try {
            const response = await axios.put(`${BASE_URL}/${args.index}/${args.id}`, args.updAddress)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

const deleteUserAddress = createAsyncThunk(
    'userAddress/delete',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${id}`)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export {
    getAllAddressesOfUser,
    getSingleAddressesOfUser,
    addUserAddress,
    updUserAddress,
    deleteUserAddress
}