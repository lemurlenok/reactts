import React from 'react';
import FooterComponent from '../component/footer/FooterComponent';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../component/header/HeaderComponent';

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