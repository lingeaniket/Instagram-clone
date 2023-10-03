import axios from "axios";
import { apiSite } from "../Website/website";
import { createSlice } from "@reduxjs/toolkit";

export const fullPostCommentSlice = createSlice({
    name: "fullPostCommentSlice",
    initialState: {
        username: "",
        userId: "",
        commentId: "",
        comment: "",
        uuidv: "",
    },
    reducers: {
        addPostComment: (state, action) => {
            // setComment("");
            const { postUser, postId } = action.payload;
            const user = JSON.parse(localStorage.getItem("userId"));
            axios.put(`${apiSite}/posts/add-comment`, {
                id: state.uuidv,
                user: user,
                postUser: postUser,
                postId: postId,
                comment: state.comment,
            })
        },
        addPostReply: (state, action) => {
            const { postUser, postId } = action.payload;
            const user = JSON.parse(localStorage.getItem("userId"));
            axios.put(`${apiSite}/posts/add-reply`, {
                id: state.uuidv,
                user,
                postUser,
                postId,
                commentId: state.commentId,
                replyText: state.comment,
                toUser: state.username,
                toUserId: state.userId,
            });
        },

        updateData: (state, action) => {
            state.username = action.payload.username;
            state.userId = action.payload.userId;
            state.commentId = action.payload.commentId;
            return state;
        },

        updateComment: (state, action) => {
            // state.comment = action.payload.comment;
            return { ...state, comment: action.payload.comment };
        },
        updateUuidv: (state, action) => {
            state.uuidv = action.payload.uuid;
        },
    },
});

export const {
    addPostComment,
    addPostReply,
    updateData,
    updateComment,
    updateUuidv,
} = fullPostCommentSlice.actions;

export default fullPostCommentSlice.reducer;
