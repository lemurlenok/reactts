export const baseUrl = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: {
        base: '/users',
        byId: (id: number): string => `${urls.users.base}/${id}`,
    },
    posts: {
        base: '/posts',
        byId: (id: number): string => `${urls.posts.base}/${id}`,
    },
    comments: {
        base: '/comments',
        byId: (id: number): string => `${urls.comments.base}/${id}`,
        byPostId: (postId: number): string => `${urls.comments.base}?postId=${postId}`,
    }
};