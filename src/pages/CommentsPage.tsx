import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import {IPost} from "../models/IPost";
import {getAllPosts, getAllCommentsWithSkip} from "../services/api.services";
import PostsComponent from "../components/postsComponent/postsComponent.";
import styles from './PagesStyle.module.css'

const PostsPage = () => {


    let [searchParams] = useSearchParams()
    let page = searchParams.get('page')

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        let skip;

        if (page){
            skip = +page * 25 -25;
            // @ts-ignore
            getAllPostsWithSkip(skip).then((posts: any) => setPosts([...posts]))
        }else {
            getAllPosts().then((posts) => setPosts([...posts]))
        }

    },[page]);


    return (
        <div className={styles.usersDiv}>
            <PostsComponent posts={posts}/>
            <PaginationComponent/>
        </div>
    );
};

export default PostsPage;