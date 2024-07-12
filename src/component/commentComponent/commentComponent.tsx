import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import styles from './commentComponent.module.css'

interface IProp {
    comment: IComment
}

const CommentComponent:FC <IProp> = ({comment}) => {
    return (
        <div className={styles.comment}>
            {comment.id}  {comment.postId}: {comment.email} - {comment.name}: {comment.body}
        </div>
    );
};

export default CommentComponent;