const createSlice = require("@reduxjs/toolkit").createSlice
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk
const axios = require("axios")

const initialState = {
    loading: false,
    users: [],
    error: '',
}

// Generates pending, fulfilled and rejected action types
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {response.data.map(user => user.name)})
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
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

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers