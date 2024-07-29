import { ReactNode } from 'react';

export interface IComment {
    likes: ReactNode;
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}