import React, {useEffect} from 'react';
import {userAction} from "../redux/slice/userSlice";
import {useAppDispatch, useAppSelector} from "../redux/store";
import Users from "../components/users/Users";

const SortedPage = () => {

    let dispatch = useAppDispatch();
    let users = useAppSelector(state => state.userStore.users);
    useEffect(() => {

        if (users.length) {
            console.log(users);
            let users2 = [...users];

            dispatch(userAction.refillUsers(
                users.sort((user1, user2) => user2.id - user1.id)));
        }
    }, []);

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default SortedPage;