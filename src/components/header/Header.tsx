import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><Link to={'/users'}><strong>Users</strong></Link></li>
                <li><Link to={'/posts'}><strong>Posts</strong> </Link></li>
                <li><Link to={'/comments'}><strong>Comments</strong></Link></li>
                <hr/>

            </ul>
        </div>
    );
};

export default Header;