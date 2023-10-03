import { configureStore } from "@reduxjs/toolkit";
import fullPostSlice from "../Features/fullPostSlice";
import fullPostCommentSlice from "../Features/fullPostCommentSlice";

export default configureStore({
    reducer: {
        fullPostData: fullPostSlice,
        fullPostComment: fullPostCommentSlice,
    },
});
