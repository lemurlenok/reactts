import React, {Component} from 'react';
import {IUser} from "../../models/IUser";
import styles from './UserComponent.module.css'


type MyProp = {
    user: IUser,
    getPosts:(id:number)=> void;
}

class UserComponent extends Component<MyProp, {}> {
    render() {
        return (
            <div className={styles.userBlock}>
                {this.props.user.id} - {this.props.user.firstName} {this.props.user.lastName} - {this.props.user.email}
                <button onClick={() => {
                    this.props.getPosts(this.props.user.id)
                }}>
                    show all the post
                </button>
            </div>
        );
    }
}

export default UserComponent;