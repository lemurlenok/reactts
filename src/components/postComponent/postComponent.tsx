import React, { FC } from 'react';
import { IPost } from '../../models/IPost';
import { Link } from 'react-router-dom';
import styles from './postComponent.module.css';

interface IProps {
    post: IPost;
}

const PostComponent: FC<IProps> = ({ post }) => {
    return (
        <div className={styles.post}>
            <div className={styles['post-title']}>{post.title}</div>
            <div className={styles['post-body']}>{post.body}</div>
            <div className={styles['post-meta']}>
                <span>ID: {post.id}</span>
                <span>User ID: {post.userId}</span>
            </div>
            <Link to={`/posts/${post.id}/comments`} className={styles['comments-link']}>
                View Comments
            </Link>
        </div>
    );
};

export default PostComponent;