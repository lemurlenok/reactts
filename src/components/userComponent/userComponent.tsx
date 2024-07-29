import React, { FC } from 'react';
import { IUser } from '../../models/IUser';
import styles from './userComponent.module.css';
import { Link } from 'react-router-dom';

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
                <Link to={`/users/${user.id}/posts`} className={styles.userPostsLink}>
                    View Posts
                </Link>
            </div>
        </div>
    );
};

export default UserComponent;