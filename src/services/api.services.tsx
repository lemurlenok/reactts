import axios from "axios";
import {baseUrl, commentsUrl, postsUrl, usersUrl} from "../contacts/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

let axiosInstance = axios.create({
    baseURL: baseUrl
})

const getAllUsers = async ():Promise<IUser[]> => {
    return await axiosInstance.get(baseUrl + usersUrl).then(value => value.data)
}

const getAllPosts = async ():Promise<IPost[]> => {
    return await axiosInstance.get(baseUrl + postsUrl).then(value => value.data)
}

const getAllComments = async ():Promise<IComment[]> => {
    return await axiosInstance.get(baseUrl + commentsUrl).then(value => value.data)
}
const getAllCommentsWithSkip = async (skip: number):Promise<IComment[]> => {
    return await axiosInstance.get(urls.baseURL + urls.commentsUrl + urls.commentsLimit + urls.skipPart + skip).then(value => value.data.comments)
}

export {getAllComments, getAllUsers, getAllPosts, getAllCommentsWithSkip}