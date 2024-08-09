import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { loadAllComments } from '../redux/slice/commentsSlice';
import Comments from '../components/comments/comments';

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
            <h1>All Comments</h1>
            <Comments comments={comments} />
        </div>
    );
};

export default CommentsPage;