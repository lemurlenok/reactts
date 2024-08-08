import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/users'}>to users page</Link></li>
                <li><Link to={'/posts'}>to posts page</Link></li>
                <li><Link to={'/users/sort'}>to sort users page</Link></li>
                <hr/>

            </ul>
        </div>
    );
};

export default Header;