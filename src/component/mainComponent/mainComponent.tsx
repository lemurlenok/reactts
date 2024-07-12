import React from 'react';
import {Link} from "react-router-dom";
import styles from './mainComponent.module.css'

const MainComponent = () => {
    return (
        <div className={styles.wrapper}>
            <span><Link to={''} className={styles.links}>Home Page  </Link></span>
            <span><Link to={'users'} className={styles.links}>Users Page  </Link></span>
            <span><Link to={'posts'} className={styles.links}>Posts Page  </Link></span>
            <span><Link to={'comments'} className={styles.links}>Comments Page  </Link></span>
            <span><Link to={'error'} className={styles.links}>Error Page</Link></span>

        </div>
    );
};

export default MainComponent;