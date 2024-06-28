import React from 'react';

interface Props {
    user: {
        id: number;
        name: string;
    };
}

const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <h2>Деталі користувача</h2>
            <p>ID: {user.id}</p>
            <p>Ім'я: {user.name}</p>
        </div>
    );
};

export default User;