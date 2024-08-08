import React from 'react';
import {useForm} from "react-hook-form";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {authService} from "../services/api.service";



const AuthFormComponent: React.FC = () => {
    const { register, handleSubmit } = useForm<TokenObtainPairModel>({
        defaultValues: {
            username: 'lemurlenok1',
            password: '4le30Jb4$',
        }
    });
    const authenticate = (data: TokenObtainPairModel) => {
        authService.authUser(data)
    };
    return (
        <div>

            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>auth me</button>
            </form>


        </div>
    )
        ;
};

export default AuthFormComponent;