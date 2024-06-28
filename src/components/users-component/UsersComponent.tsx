import React, { FC, useState, useEffect } from 'react';
import UserComponent from '../user-component/userComponent';
import { IUser } from '../../models/IUser';
import {getAllUsers,getAllPostsByUserId} from '../../services/api.service';
import { IPost } from '../../models/IPost';
import PostsComponent from '../posts-component/PostComponent';

const UsersComponent = ()=> {
    const [users, setUsers] = useState<IUser[]>([])
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllUsers().then((users: IUser[]) => {
            setUsers([...users]);
        });
    }, []);


    const getPosts = (id:number) => {
        getAllPostsByUserId(id).then(posts => setPosts([...posts]))
    }

    return (
        <div>
            <div>
                {users.map((user: IUser) => (
                    <UserComponent
                        key={user.id}
                        user={user}
                        getPosts = {getPosts}

                    />
                ))
                }
            </div>
            <hr/>
            <div>
                <PostsComponent posts={posts}/>
            </div>



        </div>



    )

}

export default UsersComponent;