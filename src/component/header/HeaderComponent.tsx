import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={'about'}>about</NavLink>
            <NavLink to={'contacts'}> contacts</NavLink>
        </div>
    );
};

export default HeaderComponent;