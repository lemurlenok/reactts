import React, { FC } from 'react';
import { IUser } from '../../models/IUser';
import UserComponent from '../userComponent/userComponent';
import styles from './usersComponent.module.css';

interface IProps {
    users: IUser[];
}

const UsersComponent: FC<IProps> = ({ users }) => {
    return (
        <div className={styles.usersWrap}>
            {users.map(user => (
                <div key={user.id}>
                    <UserComponent user={user} />

                </div>
            ))}
        </div>
    );
};

export default UsersComponent;