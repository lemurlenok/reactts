import axios from 'axios';
import {IUser} from "../models/IUser";
import {baseUrl, urls} from "../constants/url";
import {IPost} from "../models/IPost";
import { IComment } from '../models/IComment';


let axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        let response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    },
    getById: async (id: number): Promise<IUser> => {
        let response = await axiosInstance.get<IUser>(urls.users.byId(id));
        return response.data;
    }
}
export const postService = {
    getAll: async (): Promise<IPost[]> => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getById: async (id: number): Promise<IPost> => {
        let response = await axiosInstance.get<IPost>(urls.posts.byId(id));
        return response.data;
    }
}
export const commentService = {
    getAll: async (): Promise<IComment[]> => {
        const response = await axiosInstance.get<IComment[]>(urls.comments.base);
        return response.data;
    },
    getById: async (id: number): Promise<IComment> => {
        const response = await axiosInstance.get<IComment>(urls.comments.byId(id));
        return response.data;
    },
    getByPostId: async (postId: number): Promise<IComment[]> => {
        const response = await axiosInstance.get<IComment[]>(urls.comments.byPostId(postId));
        return response.data;
    }
};