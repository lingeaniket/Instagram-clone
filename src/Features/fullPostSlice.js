import { createSlice } from "@reduxjs/toolkit";

export const fullPostSlice = createSlice({
    name: "fullPostSlice",
    initialState: {
        mode: "timeline",
        postArray: [],
    },
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload;
        },
        updatePostArray: (state, action) => {
            state.postArray = action.payload;
        },
    },
});

export const { changeMode, updatePostArray } = fullPostSlice.actions;

export default fullPostSlice.reducer;
