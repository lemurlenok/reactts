import { createAsyncThunk, createSlice, isFulfilled, isRejected } from "@reduxjs/toolkit";
import { userService, postService } from "../../services/api.service";
import { AxiosError } from "axios";
import { IPost } from "../../models/IPost";

type PostSliceType = {
    posts: IPost[];
    isLoaded: boolean;
    error: string;
    post: IPost | null; // Змінив user на post
};

const initialState: PostSliceType = {
    posts: [],
    isLoaded: false,
    error: '',
    post: null,
};

export const loadPosts = createAsyncThunk('postSlice/loadPosts', async (_, thunkAPI) => {
    try {
        const posts = await postService.getAll();
        return thunkAPI.fulfillWithValue(posts);
    } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

export const loadPost = createAsyncThunk('postSlice/loadPost', async (id: number, thunkAPI) => {
    try {
        const post = await postService.getById(id); // Замініть на ваш правильний метод
        return thunkAPI.fulfillWithValue(post);
    } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        fillPost: (state, action) => {
            state.post = action.payload;
        },
        refillPosts: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadPost.fulfilled, (state, action) => {
                state.post = action.payload;
            })
            .addMatcher(
                isRejected(loadPosts, loadPost),
                (state, action) => {
                    state.error = action.payload as string;
                }
            )
});

export default postSlice.reducer;
export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadPost
};


