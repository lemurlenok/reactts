import React, { FC } from 'react';
import { IComment } from '../../models/IComment';
import styles from './commentComponent.module.css';

interface IProps {
    comment: IComment;
}

const CommentComponent: FC<IProps> = ({ comment }) => {
    return (
        <div className={styles.comment}>
            <div className={styles['comment-id']}>ID: {comment.id}</div>
            <div className={styles['comment-details']}>
                Post ID: {comment.postId} - {comment.name}
            </div>
            <div className={styles['comment-email']}>Email: {comment.email}</div>
            <div className={styles['comment-body']}>{comment.body}</div>
        </div>
    );
};

export default CommentComponent;