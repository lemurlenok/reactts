import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout"
import AboutPage from './pages/about/AboutPage';
import ErrorLayout from './layouts/Error/ErrorLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
    children:[
        {
            path:'about',
            element:<h2>AboutPage</h2>
        },
        {
            path:'contacts',
            element:<h2>ContactPage</h2>
        },
        {
            element:<AboutPage/>, index: true,
        }
    ]}
]);

root.render(
    <RouterProvider router={router}/>
);