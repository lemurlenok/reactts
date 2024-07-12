import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getAllUsers} from "../../services/api.services";
import UserComponent from "../userComponent/userComponent";
import styles from './usersComponent.module.css'

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAllUsers().then((users: IUser[])=> {
            setUsers([...users])
        })
    },[])

    return (
        <div className={styles.usersWrap}>
            {users.map((user: IUser) => (
                <UserComponent
                    key={user.id}
                    user={user}
                />
            ))
            }
        </div>
    );
};

export default UsersComponent;