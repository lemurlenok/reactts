import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import AuthPage from "./Pages/AuthPage"
import RegPage from "./Pages/RegPage"



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let router =createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                index: true, element: <AuthPage/>
            },
            {
                path: '/ragistration', element: <RegPage/>
            }
        ]
    }

]);
root.render(
    <RouterProvider router={router}/>
);


