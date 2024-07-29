import React, { useEffect, useState } from 'react';
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import CommentsComponent from "../components/commentsComponent/commentsComponent";
import styles from './styles.module.css';
import { useSearchParams } from "react-router-dom";
import { IComment } from "../models/IComment";
import { getAllComments, getAllCommentsWithSkip } from "../services/api.services";

const CommentsPage = () => {
    let [searchParams] = useSearchParams();
    let page = searchParams.get('page');

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        const loadComments = async () => {
            try {
                let skip;
                if (page) {
                    skip = +page * 40 - 40;
                    const fetchedComments = await getAllCommentsWithSkip(skip);
                    setComments([...fetchedComments]);
                } else {
                    const fetchedComments = await getAllComments();
                    setComments([...fetchedComments]);
                }
            } catch (error) {
                console.error('Error loading comments:', error);
            }
        };

        loadComments();
    }, [page]);

    return (
        <div className={styles.commentsPage}>
            <h1>Comments Page</h1>
            <CommentsComponent comments={comments} />
            <PaginationComponent />
        </div>
    );
};

export default CommentsPage;