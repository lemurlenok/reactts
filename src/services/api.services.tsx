import axios, { AxiosInstance } from "axios";
import { urls } from "../contacts/urls";
import { IUser } from "../models/IUser";
import { IPost } from "../models/IPost";
import { IComment } from "../models/IComment";


const axiosInstance: AxiosInstance = axios.create({
    baseURL: urls.baseURL
});


const getAllUsers = async (): Promise<IUser[]> => {
    try {
        const response = await axiosInstance.get(`${urls.usersUrl}${urls.usersLimit}`);
        return response.data.users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Передаємо помилку наверх для подальшої обробки
    }
};

const getAllUsersWithSkip = async (skip: number): Promise<IUser[]> => {
    try {
        const response = await axiosInstance.get(`${urls.usersUrl}${urls.usersLimit}${urls.skipPart}${skip}`);
        return response.data.users;
    } catch (error) {
        console.error("Error fetching users with skip:", error);
        throw error;
    }
};

const getAllPosts = async (): Promise<IPost[]> => {
    try {
        const response = await axiosInstance.get(`${urls.postsUrl}${urls.postsLimit}`);
        return response.data.posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

const getAllPostsWithSkip = async (skip: number): Promise<IPost[]> => {
    try {
        const response = await axiosInstance.get(`${urls.postsUrl}${urls.postsLimit}${urls.skipPart}${skip}`);
        return response.data.posts;
    } catch (error) {
        console.error("Error fetching posts with skip:", error);
        throw error;
    }
};

const getAllComments = async (): Promise<IComment[]> => {
    try {
        const response = await axiosInstance.get(`${urls.commentsUrl}${urls.commentsLimit}`);
        return response.data.comments;
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
    }
};

const getAllCommentsWithSkip = async (skip: number): Promise<IComment[]> => {
    try {
        const response = await axiosInstance.get(`${urls.commentsUrl}${urls.commentsLimit}${urls.skipPart}${skip}`);
        return response.data.comments;
    } catch (error) {
        console.error("Error fetching comments with skip:", error);
        throw error;
    }
};

export {
    getAllUsers,
    getAllUsersWithSkip,
    getAllPosts,
    getAllPostsWithSkip,
    getAllComments,
    getAllCommentsWithSkip
};