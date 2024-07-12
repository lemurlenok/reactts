import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import styles from './postComponent.module.css'

interface IProp{
    post: IPost;
}

const PostComponent:FC<IProp> = ({post}) => {
    return (
        <div className={styles.post}>
            {post.id}: {post.userId}  {post.title}: {post.body}
        </div>
    );
};

export default PostComponent;