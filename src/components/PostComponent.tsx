import React, {Component} from 'react';
// @ts-ignore
import {IPost} from "../models/IForm";

type MyProp = {
    posts: IPost[];
}

class PostComponent extends Component<MyProp,{}> {
    render() {
        return (
            <div>
                {this.props.posts.map(post => <li key={post.id}>{post.title}: {post.body}</li>)}
            </div>
        );
    }
}

export default PostComponent;
