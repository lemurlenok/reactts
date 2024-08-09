import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { IComment } from '../../models/IComment';
import { postCommentService } from '../../services/api.service';
import { AxiosError } from 'axios';

type PostCommentsSliceType = {
    comments: IComment[];
    isLoaded: boolean;
    error: string;
};

const initialState: PostCommentsSliceType = {
    comments: [],
    isLoaded: false,
    error: '',
};

export const loadCommentsByPostId = createAsyncThunk(
    'postCommentsSlice/loadCommentsByPostId',
    async (postId: number, thunkAPI) => {
        try {
            const comments = await postCommentService.getCommentsByPostId(postId);
            return thunkAPI.fulfillWithValue(comments);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data || 'Не вдалося завантажити коментар');
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
                state.comments = action.payload;
                state.isLoaded = true;
                state.error = '';
            })
            .addMatcher(isRejected(loadCommentsByPostId), (state, action) => {
                state.isLoaded = false;
                state.error = action.payload as string;
            })
});

export default postCommentsSlice.reducer;
export const postCommentsActions = {
    loadCommentsByPostId
};