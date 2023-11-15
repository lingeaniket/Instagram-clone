import { createSlice } from "@reduxjs/toolkit";

const authLoginSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: JSON.parse(localStorage.getItem("userId")) || false,
    },
    reducers: {
        handleUserLogin: (state, action) => {
            state.isLoggedIn = true;
        },
        handleUserLogOut: (state, action) => {
            state.isLoggedIn = false;
        },
    },
});

export const { handleUserLogin, handleUserLogOut } = authLoginSlice.actions;

export default authLoginSlice.reducer;
