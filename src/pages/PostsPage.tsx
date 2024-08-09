import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { postActions } from '../redux/slice/postSlice';
import { Link } from 'react-router-dom';

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const { posts, isLoaded, error } = useAppSelector(state => state.postStore);

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, [dispatch]);

    if (!isLoaded) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Posts</h1>
            {posts && posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}/comments`}>View Comments</Link>
                    </div>
                ))
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    );
};

export default PostsPage;