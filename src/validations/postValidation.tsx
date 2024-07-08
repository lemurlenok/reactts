import { Post } from '../models/Post';

export const validatePost = (data: Post) => {
    const errors: Partial<Post> = {};

    if (!data.title) {
        errors.title = 'Title is required';
    }

    if (!data.body) {
        errors.body = 'Body is required';
    }

    return errors;
};