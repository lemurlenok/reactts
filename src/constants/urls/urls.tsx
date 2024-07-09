const baseUrl = 'https://dummyjson.com'

const urls = {
    allUsers: '/users?limit=0',
    userById: (id:number) => '/users/' + id,
    postsById: (id:number) => '/posts/user/' +id
}

export {baseUrl, urls}