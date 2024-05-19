import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../app/features/posts/postsSlice'


export const store = configureStore({
    reducer: {
        posts: postReducer,
    }
})