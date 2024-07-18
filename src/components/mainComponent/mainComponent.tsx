import React from 'react';
import {Link} from "react-router-dom";
import styles from './mainComponent.module.css'

const MainComponent = () => {
    return (
        <div className={styles.wrapper}>
            <span><Link to={''} className={styles.links}>Home </Link></span>
            <span><Link to={'users'} className={styles.links}>Users </Link></span>
            <span><Link to={'posts'} className={styles.links}>Posts </Link></span>
            <span><Link to={'comments'} className={styles.links}>Comments </Link></span>

        </div>
    );
};

export default MainComponent;