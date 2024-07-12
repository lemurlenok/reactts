import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import styles from './userComponent.module.css'

interface IProp {
    user: IUser
}

const UserComponent: FC <IProp> = ({user}) => {
    return (
        <div className={styles.user}>
            {user.id}: {user.name} - {user.username} - {user.email}
        </div>
    );
};

export default UserComponent;