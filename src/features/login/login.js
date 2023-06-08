import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: ""
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginUser : (state, action) =>{
            state.email = action.payload.email
            state.password = action.payload.password
        }
    }
});

export default loginSlice.reducer;

export const {loginUser} = loginSlice.actions