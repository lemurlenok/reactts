import React, {useEffect, useState} from 'react';
import UsersComponent from "../components/usersComponent/usersComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {IUser} from "../models/IUser";
import {getAllUsers, getAllUsersWithSkip} from "../services/api.services";
import styles from './styles.module.css'

const UsersPage = () => {


    let [searchParams] = useSearchParams()
    let page = searchParams.get('page')

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        let skip;
        if (page){
            skip = +page * 20 - 20;
            getAllUsersWithSkip(skip).then((users: IUser []) => setUsers([...users]))

        }else {
            getAllUsers().then((users: IUser[]) => setUsers([...users]))
        }
    }, [page])



    return (
        <div className={styles.usersDiv}>
            <UsersComponent users={users}/>
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;