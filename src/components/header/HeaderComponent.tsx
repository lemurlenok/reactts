import React from 'react';
import {NavLink} from "react-router-dom";


const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>auth page</NavLink></li>
                <li><NavLink to={'/registration'}>registration page</NavLink></li>
            </ul>

        </div>
    );
};

export default HeaderComponent;