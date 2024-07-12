import React, {FC} from 'react';
import styles from './homeComponent.module.css'

const HomeComponent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Home Page</h1>
            <img className={styles.img} src="https://zaxid.net/resources/photos/news/1200x675_DIR/202403/1580957.jpg?202407133904" alt="#"/>
        </div>
    );
};

export default HomeComponent;