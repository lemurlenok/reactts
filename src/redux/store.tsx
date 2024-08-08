import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import {postSlice} from "./slice/postSlice/"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        userStore: userSlice.reducer,
        postStore: postSlice.reducer,
    }
});



export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;