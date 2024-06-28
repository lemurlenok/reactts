import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/docs/users`);
        return response.data; // Припускаємо, що response.data містить масив користувачів
    } catch (error) {
        console.error('Помилка отримання користувачів:', error);
        throw error;
    }
};