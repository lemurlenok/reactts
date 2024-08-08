import React, {FC, useEffect} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/store";

interface IProps {
    users: IUser[];
}

const Users: FC<IProps> = ({users}) => {


    return (
        <ul>

            {
                users.map(user => (<li key={user.id}>
                    <Link to={'/users/' + user.id}>{user.id}: {user.name}</Link>
                </li>))

            }
        </ul>
    );
};

export default Users;