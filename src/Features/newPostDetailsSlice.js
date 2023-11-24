import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiSite } from "../Website/website";

const newPostDetailsSlice = createSlice({
    name: "newPostDetails",
    initialState: {
        imageid: "",
        caption: "",
        updates: 0,
    },
    reducers: {
        changeImageid: (state, action) => {
            state.imageid = action.payload;
        },
        addCaptiion: (state, action) => {
            state.caption = action.payload;
        },
        postUpdates: (state, action) => {
            const data = state.updates;
            state.updates = data + 1;
            // console.log("updated");
        },
        sharePost: (state, action) => {
            // console.log("post added");
            axios
                .post(`${apiSite}/posts/add-new-post`, {
                    userId: JSON.parse(localStorage.getItem("userId")),
                    postId: Number(state.imageid),
                    caption: state.caption,
                })
                .then((res) => {
                    console.log(res.data);
                });
        },
    },
});

export const { changeImageid, addCaptiion, sharePost, postUpdates } = newPostDetailsSlice.actions;

export default newPostDetailsSlice.reducer;
