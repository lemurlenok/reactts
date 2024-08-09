import { createAsyncThunk, createSlice, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { IComment } from '../../models/IComment';
import { commentService } from '../../services/api.service';
import { AxiosError } from 'axios';

type PostCommentsSliceType = {
    postComments: Record<number, IComment[]>; // Коментарі по ID поста
    isLoaded: boolean;
    error: string;
};

const initialState: PostCommentsSliceType = {
    postComments: {},
    isLoaded: false,
    error: '',
};

export const loadCommentsByPostId = createAsyncThunk(
    'postCommentsSlice/loadCommentsByPostId',
    async (postId: number, thunkAPI) => {
        try {
            const comments = await commentService.getByPostId(postId);
            return thunkAPI.fulfillWithValue({ postId, comments });
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);

const postCommentsSlice = createSlice({
    name: 'postCommentsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadCommentsByPostId.fulfilled, (state, action) => {
                const { postId, comments } = action.payload;
                state.postComments[postId] = comments;
                state.isLoaded = true;
            })
            .addMatcher(isRejected(loadCommentsByPostId), (state, action) => {
                state.error = action.payload as string;
            })
});

export default postCommentsSlice.reducer;
export const postCommentsActions = {
    loadCommentsByPostId
};