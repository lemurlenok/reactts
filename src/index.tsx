import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MainLayout from './layouts/MainLayout';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import CommentsPage from './pages/CommentsPage';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'users', element: <UsersPage /> },
            { path: 'posts', element: <PostsPage /> },
            { path: 'comments', element: <CommentsPage /> }

        ]
    }
]);

root.render(
    <RouterProvider router={router} />
);