import React from 'react';
import UsersComponent from "../components/usersComponent/usersComponent";
import styles from './styles.module.css'

const UsersPage = () => {
    return (
        <div className={styles.usersDiv}>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;