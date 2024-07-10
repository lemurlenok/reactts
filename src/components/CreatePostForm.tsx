import React from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "../modals/IForm";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from '../validators/userValidator';
import {baseUrl} from "../constants/api";
import styles from './FormComponent.module.css'
import axios from 'axios';

const FormComponent = () => {
    let {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IForm>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const formPostCreator = async (data: IForm) => {
        try {
            const response = await axios.post(`${baseUrl}/post`, {
                userId: data.userId,
                title: data.title,
                body: data.body,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Помилка під час відправлення даних:', error);
        }
    };

    return (
        <div className={styles.wrapper}>
            {errors.userId && (
                <div className={styles.error}>
                    Помилка в ідентифікаторі користувача: {errors.userId?.message}
                </div>
            )}
            {errors.title && (
                <div className={styles.error}>
                    Помилка в назві: {errors.title?.message}
                </div>
            )}
            {errors.body && (
                <div className={styles.error}>Помилка у тексті: {errors.body?.message}</div>
            )}
            <form onSubmit={handleSubmit(formPostCreator)} className={styles.formContent}>
                <label htmlFor="userId">Ідентифікатор користувача: </label>
                <input type="number" id="userId" {...register('userId')} className={styles.input} />
                <label htmlFor="title">Назва: </label>
                <input type="text" id="title" {...register('title')} className={styles.input} />
                <label htmlFor="body">Текст: </label>
                <input type="text" id="body" {...register('body')} className={styles.input} />

                <button disabled={!isValid} type="submit" className={styles.btn}>
                    Надіслати
                </button>
            </form>
        </div>
    );
};

export default FormComponent;