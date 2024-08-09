import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import PostsPage from '../pages/PostsPage';
import UserPage from '../pages/UserPage';
import SortedPage from '../pages/SortedPage';
import PostCommentPage from '../pages/PostCommentPage';
import CommentsPage from '../pages/PostCommentPage';

export let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <h1>404 error!</h1>,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'users', element: <UsersPage /> },
            { path: 'users/:id', element: <UserPage /> },
            { path: 'posts', element: <PostsPage /> },
            { path: 'users/sort', element: <SortedPage /> },
            { path: 'posts/:postId/comments', element: <PostCommentPage /> },
            { path: 'comments', element: <CommentsPage/>}
        ],
    },
]);