import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {UserModel} from "../models/UserModel";
import {userService} from "../services/api.service";

const RegistrationFormComponent = () => {
    let {
        handleSubmit,
        register
    } = useForm<UserModel>();

    const [isRegistrated, setIsRegistrated] = useState<boolean>(false)


    const onSubmitFormHandler = async (data: UserModel) => {
        let isReg = await userService.saveUser(data);
        setIsRegistrated(isReg);

    }
    return (
        <div>


            <form onSubmit={handleSubmit(onSubmitFormHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>register me</button>
            </form>
            {
                isRegistrated && (<div>you did registration</div>)
            }
        </div>
    );
};

export default RegistrationFormComponent;