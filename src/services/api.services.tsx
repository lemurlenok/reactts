import axios from "axios";
import { baseUrl, commentsUrl, postsUrl, usersUrl } from "../contacts/urls";
import { IUser } from "../models/IUser";
import { IPost } from "../models/IPost";
import { IComment } from "../models/IComment";

let axiosInstance = axios.create({
    baseURL: baseUrl
});

const getAllUsers = async (): Promise<IUser[]> => {
    try {
        const response = await axiosInstance.get(usersUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

const getAllPosts = async (): Promise<IPost[]> => {
    try {
        const response = await axiosInstance.get(postsUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};

const getAllComments = async (): Promise<IComment[]> => {
    try {
        const response = await axiosInstance.get(commentsUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching comments:", error);
        return [];
    }
};

const getAllCommentsWithSkip = async (skip: number): Promise<IComment[]> => {
    try {
        const response = await axiosInstance.get(`${commentsUrl}?_limit=${skip}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching comments with skip ${skip}:`, error);
        return [];
    }
};

export { getAllUsers, getAllPosts, getAllComments, getAllCommentsWithSkip };