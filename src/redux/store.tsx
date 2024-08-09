import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import postReducer from "./slice/postSlice";
import commentsReducer from "./slice/commentsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import postCommentsReducer from './slice/postCommentSlice';

export const store = configureStore({
    reducer: {
        userStore: userSlice.reducer,
        postStore: postReducer,
        commentsStore: commentsReducer,
        postCommentsStore: postCommentsReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;