import axios from 'axios';
import {UserModel} from "../models/UserModel";
import {UserResponse} from "../models/UserResponseModel";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefresh} from "../models/TokenRefresh";
import {retriveLocalStorageData} from "../helpers/helpers";
import {CarPaginatedModel} from "../models/CarPaginatedModel";
import {CarWithAuthModel} from "../models/CarWithAuthModel";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

axiosInstance.interceptors.request.use(requestObject => {

    if (localStorage.getItem('tokenPair') && requestObject.url !== '/auth') {
        requestObject.headers.set('Authorization', 'Bearer ' + retriveLocalStorageData<TokenRefresh>('tokenPair').access);

    }

    return requestObject;
})

const userService = {
    saveUser: async (data: UserModel): Promise<boolean> => {
        let response = await axiosInstance.post<UserResponse>('/users', data);
        console.log(response.status === 201);
        return !!response.data.id || false
    }
}

const authService = {
    authenticate: async (data: TokenObtainPairModel): Promise<void> => {
        let response = await axiosInstance.post<TokenRefresh>('/auth', data);
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
}

const carService = {
    getCars: async ():Promise<CarPaginatedModel> => {
        let response = await axiosInstance.get<CarPaginatedModel>('/cars');
        let data = response.data;
        console.log(data);
        return data;


    }
}

export {
    userService,
    authService,
    carService
}