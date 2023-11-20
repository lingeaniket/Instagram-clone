import { createSlice } from "@reduxjs/toolkit";

const newPostDetailsSlice = createSlice({
    name: "newPostDetails",
    initialState: {
        imageid: "",
        caption: "",
    },
    reducers: {
        changeImageid: (state, action) => {
            state.imageid = action.payload;
        },
        addCaptiion: (state, action) => {
            state.caption = action.payload;
        },
    },
});

export const {changeImageid, addCaptiion} = newPostDetailsSlice.actions;

export default newPostDetailsSlice.reducer
