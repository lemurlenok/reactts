import React, { FC } from 'react';
import styles from './homeComponent.module.css';

const HomeComponent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Home</h1>
        </div>
    );
};

export default HomeComponent;