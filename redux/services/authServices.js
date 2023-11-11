import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL =  'http://localhost:3001/api' + '/user'

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
        console.log(" send login request");
        try {
            const response = await axios.post(`${BASE_URL}/login`, loginData)
            console.log(response.data);
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
                console.log(error.response.data);
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
    localStorage.setItem('auth', token)
}

// Delete Auth Token
const deleteAuthToken = async () => {
    localStorage.setItem('auth', '')
}

export { register, login, getUserAccount, setAxiosHeader, storeAuthToken, deleteAuthToken }