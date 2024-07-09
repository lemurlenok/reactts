import axios from "axios";
import {baseUrl, urls} from "../constants/urls/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

let axiosInstance = axios.create({
    baseURL: baseUrl
})

const getAllUsers = async ():Promise<IUser[]> => {
    return await axiosInstance.get(urls.allUsers).then((response) => response.data.users)
}

const getAllPostsById = async (id:number):Promise<IPost[]> => {
    return await axiosInstance.get(urls.postsById(id)).then((response) => response.data.posts)
}

export {getAllUsers,getAllPostsById}