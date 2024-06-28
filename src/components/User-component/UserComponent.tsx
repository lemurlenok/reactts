import React, { FC } from 'react';
import { IUser } from '../../models/IUser';

interface IProps {
    user: IUser;
    onSelectUser: (userId: number) => void;
    onGetUserPosts: (userId: number) => void; // Додаємо пропс для функції отримання постів користувача
}

const UserComponent: FC<IProps> = ({ user, onSelectUser, onGetUserPosts }) => {
    return (
        <div>
            {user.id} : {user.lastName} -
            <button onClick={() => {
                onSelectUser(user.id);
                onGetUserPosts(user.id); // Викликаємо функцію для отримання постів
            }}>
                Show posts of this user
            </button>
        </div>
    );
};

export default UserComponent;