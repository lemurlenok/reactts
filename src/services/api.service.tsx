import axios from 'axios';
import { IUser } from '../models/IUser';
import { IPost } from '../models/IPost';
import { IComment } from '../models/IComment';
import { baseUrl, urls } from '../constants/url';

let axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    },
    getById: async (id: number): Promise<IUser> => {
        const response = await axiosInstance.get<IUser>(urls.users.byId(id));
        return response.data;
    }
};

export const postService = {
    getAll: async (): Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getById: async (id: number): Promise<IPost> => {
        const response = await axiosInstance.get<IPost>(urls.posts.byId(id));
        return response.data;
    }
};

export const postCommentService = {
    getCommentsByPostId: async (postId: number): Promise<IComment[]> => {
        try {
            const response = await axiosInstance.get<IComment[]>(urls.comments.byPostId(postId));
            return response.data;
        } catch (error) {
            console.error('Failed to fetch comments for post:', error);
            throw error;
        }
    }
};
export const commentService = {
    getAll: async (): Promise<IComment[]> => {
        const response = await axiosInstance.get<IComment[]>(urls.comments.base);
        return response.data;
    },


};