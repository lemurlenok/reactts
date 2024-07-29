import React from 'react';
import {Outlet} from "react-router-dom";
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/header/HeaderComponent';


const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;