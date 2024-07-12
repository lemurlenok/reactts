import React from 'react';
import {Outlet} from "react-router-dom";
import MainComponent from "../components/mainComponent/mainComponent";

const MainLayout = () => {
    return (
        <div>
            <MainComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;