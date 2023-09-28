import { configureStore } from "@reduxjs/toolkit";
import fullPostSlice from "../Features/fullPostSlice";

export default configureStore({
    reducer: {
        fullPostData: fullPostSlice,
    },
});
