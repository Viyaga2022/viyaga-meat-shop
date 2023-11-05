import { API_URL } from '@env'
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = API_URL + '/user'

// Register Service
const register = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}/register`, userData)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

// Login Service
const login = createAsyncThunk(
    'auth/login',
    async (loginData, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, loginData)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get My Account 
const getUserAccount = createAsyncThunk(
    'auth/myAccount',
    async (token, thunkAPI) => {

        // set Auth Token in Axios Header
        setAxiosHeader(token)

        try {
            const response = await axios.get(`${BASE_URL}/getUserAccount`)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

// set Axios Header 
const setAxiosHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Store Auth Token
const storeAuthToken = async (token) => {
    await AsyncStorage.setItem('auth', token)
}

// Delete Auth Token
const deleteAuthToken = async () => {
    await AsyncStorage.setItem('auth', '')
}

export { register, login, getUserAccount, setAxiosHeader, storeAuthToken, deleteAuthToken }