import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { loadAllComments } from '../redux/slice/commentsSlice';

const CommentsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { comments, isLoaded, error } = useAppSelector(state => state.commentsStore);

    useEffect(() => {
        dispatch(loadAllComments());
    }, [dispatch]);

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
                    {comments.map(comment => (
                        <li key={comment.id}>{comment.text}</li>
                    ))}
                </ul>
            ) : (
                <div>No comments available.</div>
            )}
        </div>
    );
};

export default CommentsPage;