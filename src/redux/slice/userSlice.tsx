import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { userService } from "../../services/api.service";
import { AxiosError } from "axios";

type UserSliceType = {
    users: IUser[];
    isLoaded: boolean;
    isLoading: boolean;
    error: string | null;
    user: IUser | null;
};

const initialState: UserSliceType = {
    users: [],
    isLoaded: false,
    isLoading: false,
    error: null,
    user: null
};

let loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    try {
        let users = await userService.getAll();
        return users;
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data || 'Failed to load users');
    }
});

let loadUser = createAsyncThunk('userSlice/loadUser', async (id: number, thunkAPI) => {
    try {
        let user = await userService.getById(id);
        return user;
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data || 'Failed to load user');
    }
});

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        fillUser: (state, action) => {
            state.user = action.payload;
        },
        refillUsers: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoaded = true;
                state.isLoading = false;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addCase(loadUser.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addMatcher(
                isRejected(loadUsers, loadUser),
                (state, action) => {
                    state.error = action.payload as string;
                    state.isLoading = false;
                }
            )
});

export const userAction = {
    ...userSlice.actions,
    loadUsers,
    loadUser
}