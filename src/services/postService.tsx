import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const getPostsByUserId = async (userId: number) => {
    try {
        const response = await axios.get(`${API_URL}/docs/posts?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Помилка отримання постів для користувача ${userId}:`, error);
        throw error;
    }
};