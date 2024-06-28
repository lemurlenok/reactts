import axios from 'axios';
import { IUser } from '../models/IUser';
import { IPost } from '../models/IPost';


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/users',
});

axiosInstance.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json';
    return config;
});

// Отримання всіх користувачів
const getAllUsers = async () => {
    try {
        const response = await axiosInstance.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

const getPostsOfUserById = async (id: number) => {
    try {
        const response = await axiosInstance.get(`/users/${id}/posts`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching posts for user ${id}:`, error);
        throw error;
    }
};

const getAllPostsByUserId = async (userId: number) => {
    try {
        const response = await axiosInstance.get(`/posts?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching posts for user ${userId}:`, error);
        throw error;
    }
};

export { getAllUsers, getPostsOfUserById, getAllPostsByUserId };