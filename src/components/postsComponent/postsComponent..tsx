import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import styles from './postsComponent.module.css'
import PostComponent from "../postComponent/postComponent";

interface IProp {
    posts: IPost[]
}

const PostsComponent:FC<IProp> = ({posts}) => {
    return (
        <div className={styles.wrapper}>
            {posts.map(post => (
                <PostComponent
                    key={post.id}
                    post={post}/>
            ))}
        </div>
    );
};

export default PostsComponent;