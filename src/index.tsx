import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CustomErrorLayout from "./layouts/CustomErrorLayout";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


let router = createBrowserRouter([
    {
        path: '/',
        errorElement: <CustomErrorLayout/>,
        element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]
    }



])



root.render(
    <RouterProvider router={router}/>
);