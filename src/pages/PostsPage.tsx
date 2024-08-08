import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { postsAction } from '../redux/slice/postSlice';

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postsStore.posts);

    useEffect(() => {
        dispatch(postsAction.loadPosts());
    }, [dispatch]);

    return (
        <div>
            <h1>Posts</h1>
            {posts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostsPage;