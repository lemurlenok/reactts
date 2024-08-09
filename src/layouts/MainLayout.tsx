import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/header/Header";
import styles from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Outlet/>

            <footer className={styles.footer}>
                <p>&copy; 2024 Your Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainLayout;