import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})

const getAllUsers = async () : Promise<IUser[]>=> {
    return await axiosInstance.get('/users'+'?limit=0').then((response) => response.data.users)
};

const getAllPostsByUserId = async (id:number) : Promise<IPost[]>=> {
    return await axiosInstance.get('/posts/user/'+id).then((response) => response.data.posts)
}

export {getAllUsers,getAllPostsByUserId}