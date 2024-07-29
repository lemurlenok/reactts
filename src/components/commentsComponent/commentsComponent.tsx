import React, { FC } from 'react';
import { IComment } from '../../models/IComment';
import CommentComponent from '../commentComponent/commentComponent';
import styles from './commentsComponent.module.css';

interface IProp {
    comments: IComment[];
}

const CommentsComponent: FC<IProp> = ({ comments }) => {
    return (
        <div className={styles.wrapper}>
            {comments.map(comment => (
                <CommentComponent
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
    );
};

export default CommentsComponent;