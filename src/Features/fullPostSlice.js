import { createSlice } from "@reduxjs/toolkit";

export const fullPostSlice = createSlice({
    name: "fullPostSlice",
    initialState: {
        mode: "timeline",
    },
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload;
        },
    },
});

export const { changeMode } = fullPostSlice.actions;

export default fullPostSlice.reducer;
