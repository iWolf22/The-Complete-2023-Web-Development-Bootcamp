import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    users: [],
    error: '',
}

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            console.log("fetchUsers.pending")
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log("fetchUsers.payload")
            // console.log(action)
            // console.log(state)
            state.loading = false
            state.users = action.payload
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log("fetchUsers.rejected")
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer