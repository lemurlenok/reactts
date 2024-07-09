import React from 'react';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={''}>home</Link>
                </li>
                <li>
                    <Link to={'users'}>users page</Link>
                </li>
                <li>
                    <Link to={'coments'}>comments page</Link>
                </li>

            </ul>
        </div>
    );
};

export default MenuComponent;