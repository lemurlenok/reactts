import React, {useEffect} from 'react';
import {userAction} from "../redux/slice/userSlice";
import {useAppDispatch, useAppSelector} from "../redux/store";
import Users from "../components/users/Users";

const UsersPage = () => {

    let dispatch = useAppDispatch();

    let {users, isLoaded, error} = useAppSelector(state => state.userStore);


    useEffect(() => {
        dispatch(userAction.loadUsers());
    }, []);
    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default UsersPage;