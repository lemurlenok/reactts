import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { loadCommentsByPostId } from '../redux/slice/postCommentSlice';
import { useParams } from 'react-router-dom';
import { IComment } from '../models/IComment';

const PostCommentPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const dispatch = useAppDispatch();
    const { comments, isLoaded, error } = useAppSelector(state => state.postCommentsStore);

    useEffect(() => {
        if (postId) {
            dispatch(loadCommentsByPostId(Number(postId)));
        }
    }, [dispatch, postId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment: IComment) => (
                        <li key={comment.id}>
                            <h3>{comment.name || 'No Name'}</h3>
                            <p>{comment.body || 'No Content'}</p>
                            <small>{comment.email || 'No Email'}</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No comments available.</div>
            )}
        </div>
    );
};

export default PostCommentPage;