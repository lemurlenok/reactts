import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getAllPosts} from "../../services/api.services";
import PostComponent from "../postComponent/postComponent";
import styles from './postsComponent.module.css'

const PostsComponent = () => {


    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllPosts().then((posts) => {
            setPosts([...posts])
        })
    },[])

    return (
        <div className={styles.wrapper}>
            {posts.map((post: IPost) => (
                <PostComponent
                    key={post.id}
                    post={post}
                />
            ))
            }
        </div>
    );
};

export default PostsComponent;