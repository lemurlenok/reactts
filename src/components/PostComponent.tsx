import React, { Component } from 'react';
// @ts-ignore
import { IPost } from '../modals.IForm';

type MyProps = {
    posts: IPost[];
}

class PostComponent extends Component<MyProps> {
    render() {
        const { posts } = this.props;

        return (
            <div>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            {post.title}: {post.body}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostComponent;