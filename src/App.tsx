import React, { useState, useEffect } from 'react';
// @ts-ignore
import Users from './Users';
// @ts-ignore
import { getPostsByUserId } from '../services/postService';

const App: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [userPosts, setUserPosts] = useState<any[]>([]); // Адаптуйте типи відповідно до структури постів

    useEffect(() => {
        const fetchPosts = async () => {
            if (selectedUserId) {
                try {
                    const posts = await getPostsByUserId(selectedUserId);
                    setUserPosts(posts);
                } catch (error) {
                    console.error('Помилка отримання постів:', error);
                }
            }
        };

        fetchPosts();
    }, [selectedUserId]);

    const handleUserSelect = (userId: number) => {
        setSelectedUserId(userId);
    };

    return (
        <div>
            <h1>Пости користувача</h1>
            <Users onUserSelect={handleUserSelect} />
            <hr />
            <h2>Пости обраного користувача:</h2>
            <ul>
                {userPosts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;