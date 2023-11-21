import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiSite } from "../Website/website";

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
        sharePost: async (state, action) => {
            console.log("post added")
            await axios.post(`${apiSite}/posts/add-new-post`, {
                userId: JSON.parse(localStorage.getItem("userId")),
                postId: Number(state.imageid),
                caption: state.caption,
            }).then((res)=>{
                console.log(res.data)
            });
        },
    },
});

export const { changeImageid, addCaptiion, sharePost } = newPostDetailsSlice.actions;

export default newPostDetailsSlice.reducer;
