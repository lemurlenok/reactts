import React, { FC, useState, useEffect } from 'react';
import UserComponent from '../user-component/userComponent';
import { IUser } from '../../models/IUser';
import { getAllUsers, getPostsOfUserById, getAllPostsByUserId } from '../../services/api.service';
import { IPost } from '../../models/IPost';
import PostsComponent from '../posts-component/PostComponent';

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [selectedUserPosts, setSelectedUserPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllUsers().then(usersData => {
            setUsers(usersData);
        }).catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []);

    const handleGetPosts = (userId: number) => {
        getPostsOfUserById(userId).then(postsData => {
            setSelectedUserPosts(postsData);
        }).catch(error => {
            console.error(`Error fetching posts for user ${userId}:`, error);
        });
    };

    const handleGetUserPosts = async (userId: number) => {
        try {
            const posts = await getAllPostsByUserId(userId);
            setSelectedUserPosts(posts);
        } catch (error) {
            console.error(`Error fetching posts for user ${userId}:`, error);
        }
    };

    return (
        <div>
            <hr />
            <div>
                {users.map(user => (
                    <UserComponent
                        key={user.id}
                        user={user}
                        onSelectUser={setSelectedUserId}
                        onGetUserPosts={handleGetUserPosts}
                    />
                ))}
            </div>
            <hr />

            {selectedUserId !== null && (
                <div>
                    <PostsComponent posts={selectedUserPosts} />
                </div>
            )}
        </div>
    );
};

export default UsersComponent;