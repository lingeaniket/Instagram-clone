import { configureStore } from "@reduxjs/toolkit";
import fullPostSlice from "../Features/fullPostSlice";
import fullPostCommentSlice from "../Features/fullPostCommentSlice";
import authLogin from "../Features/authLogin";
import newPostDetailsSlice from "../Features/newPostDetailsSlice";

export default configureStore({
    reducer: {
        fullPostData: fullPostSlice,
        fullPostComment: fullPostCommentSlice,
        authLogin: authLogin,
        newPost: newPostDetailsSlice,
    },
});
