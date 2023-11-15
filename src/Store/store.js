import { configureStore } from "@reduxjs/toolkit";
import fullPostSlice from "../Features/fullPostSlice";
import fullPostCommentSlice from "../Features/fullPostCommentSlice";
import authLogin from "../Features/authLogin";

export default configureStore({
    reducer: {
        fullPostData: fullPostSlice,
        fullPostComment: fullPostCommentSlice,
        authLogin: authLogin,
    },
});
