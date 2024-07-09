import React, {Component} from 'react';
import {IUser} from "../../models/IUser";
import {getAllPostsById, getAllUsers} from "../../services/api.service";
import UserComponent from "../UserComponent/UserComponent";
import PostComponent from "../PostComponent/PostComponent";
import {IPost} from "../../models/IPost";
import styles from './UsersComponent.module.css'

type MyState = {
    users: IUser [],
    posts: IPost []
}

class UsersComponent extends Component<{}, MyState> {

    state: MyState = {
        users: [],
        posts: []
    }

    componentDidMount() {
        getAllUsers().then(value => this.setState({users:value}))
    }
    getPosts = (id:number) => {
        getAllPostsById(id).then(posts => this.setState({posts}) )
    }



    render() {

        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        return (
            <div>
                <div className={styles.usersWrap}>{
                    this.state.users.map(user => (<UserComponent key={user.id} user={user} getPosts={this.getPosts}/>))
                }</div>
                <hr/>
                <div>
                    <PostComponent posts={this.state.posts}/>
                </div>

            </div>
        );
    }
}

export default UsersComponent;