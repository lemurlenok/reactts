import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { userAction } from "../redux/slice/userSlice";

const UserPage = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const { user, isLoading, error } = useAppSelector(state => state.userStore);

    useEffect(() => {
        if (id) {
            dispatch(userAction.loadUser(Number(id)));
        }
    }, [id, dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <h1>User Details</h1>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {user.address && (
                        <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                    )}
                </div>
            ) : (
                <div>No user found.</div>
            )}
        </div>
    );
};

export default UserPage;