 "use client"

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isSidebarOpen:false
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers:{
        toggleSidebar: ((state) => {
            console.log({slice:state.isSidebarOpen});
            const bool = state.isSidebarOpen? false:true
            state.isSidebarOpen = bool
        })
    }
})

export const { toggleSidebar } = commonSlice.actions
export default commonSlice.reducer