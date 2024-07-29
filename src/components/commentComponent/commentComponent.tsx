import React, {FC} from 'react';
import styles from './commentComponent.module.css'
import {IComment} from "../../models/IComment";

interface IProp {
    comment: IComment
}

const CommentComponent:FC<IProp> = ({comment}) => {
    return (
        <div className={styles.comment}>
            {comment.id} {comment.body} - {comment.likes} likes
        </div>
    );
};

export default CommentComponent;