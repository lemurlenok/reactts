import React, { useEffect, useState } from 'react';
// @ts-ignore
import { getUsers } from '../services/userService';

interface User {
    id: number;
    name: string;
}

interface Props {
    onUserSelect: (userId: number) => void;
}

const Users: React.FC<Props> = ({ onUserSelect }) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Помилка отримання користувачів:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Користувачі</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}{' '}
                        <button onClick={() => onUserSelect(user.id)}>Вибрати</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;