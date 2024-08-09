import { createAsyncThunk, createSlice, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { IComment } from '../../models/IComment';
import { commentService } from '../../services/api.service';
import { AxiosError } from 'axios';

type CommentsSliceType = {
    comments: IComment[];
    isLoaded: boolean;
    error: string;
};

const initialState: CommentsSliceType = {
    comments: [],
    isLoaded: false,
    error: '',
};

export const loadAllComments = createAsyncThunk(
    'commentsSlice/loadAllComments',
    async (_, thunkAPI) => {
        try {
            const comments = await commentService.getAll(); // Отримання всіх коментарів
            return thunkAPI.fulfillWithValue(comments);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadAllComments.fulfilled, (state, action) => {
                console.log('Comments loaded:', action.payload);
                state.comments = action.payload;
                state.isLoaded = true;
            })
            .addMatcher(isRejected(loadAllComments), (state, action) => {
                console.log('Error loading comments:', action.payload);
                state.error = action.payload as string;
            })
});

export default commentsSlice.reducer;
export const commentsActions = {
    loadAllComments
};