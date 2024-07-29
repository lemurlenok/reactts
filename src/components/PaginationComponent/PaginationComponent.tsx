import React from 'react';
import {useSearchParams} from "react-router-dom";
import styles from './PaginationComponent.module.css'


const PaginationComponent = () => {

    let [searchParams, setSearchParams] = useSearchParams({page:'1'})
    let page = +(searchParams.get('page')||'1');

    return (
        <div className={styles.wrap}>
            <button className={styles.btn} onClick={() => {
                let prevPage = page - 1;
                setSearchParams({page: prevPage.toString()})
            }}
                    disabled={page===1}
            >prev</button>
            <button className={styles.btn} onClick={() => {
                let nextPage = page + 1;
                setSearchParams({page: nextPage.toString()})

            }}>next</button>
        </div>
    );
};

export default PaginationComponent;