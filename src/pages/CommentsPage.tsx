import React, { useEffect, useState } from 'react';
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import { useSearchParams } from "react-router-dom";
import { IComment } from "../models/IComment";
import CommentsComponent from "../components/commentsComponent/commentsComponent";
import styles from './PagesStyle.module.css';
import {getAllComments, getAllCommentsWithSkip} from "../services/api.services";


const CommentsPage = () => {

    let [searchParams] = useSearchParams()
    let page = searchParams.get('page')

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        let skip;

        if (page){
            skip = +page * 40 - 40;
            getAllCommentsWithSkip(skip).then(comments => setComments([...comments]))
        }else {
            getAllComments().then(comments => setComments([...comments]))
        }

    }, [page]);

    return (
        <div className={styles.usersDiv}>
            <CommentsComponent comments={comments}/>
            <PaginationComponent/>
        </div>
    );
};

export default CommentsPage;