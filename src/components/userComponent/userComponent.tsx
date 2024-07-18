import React, { FC } from 'react';
import { IUser } from '../../models/IUser';
import styles from './userComponent.module.css';

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({ user }) => {
    return (
        <div className={styles.user}>
            <div className={styles['user-info']}>
                <strong>ID:</strong> {user.id} -
                <strong>Name:</strong> {user.name} -
                <strong>Username:</strong> {user.username} -
                <strong>Email:</strong> <span>{user.email}</span>
            </div>
        </div>
    );
};

export default UserComponent;