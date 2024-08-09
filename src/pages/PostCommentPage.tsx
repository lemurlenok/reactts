import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { postCommentsActions } from '../redux/slice/postCommentSlice';
import { useParams } from 'react-router-dom';
import Comments from '../components/comments/comments';

const PostCommentPage = () => {
    const dispatch = useAppDispatch();
    const { postId } = useParams<{ postId: string }>();
    const { postComments, isLoaded, error } = useAppSelector(state => state.postCommentsStore);

    useEffect(() => {
        if (postId) {
            dispatch(postCommentsActions.loadCommentsByPostId(Number(postId)));
        }
    }, [dispatch, postId]);

    return (
        <div>
            {isLoaded ? (
                postComments[Number(postId)] && postComments[Number(postId)].length > 0 ? (
                    <Comments comments={postComments[Number(postId)]} />
                ) : (
                    <p>No comments available.</p>
                )
            ) : (
                <p>Loading...</p>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default PostCommentPage;