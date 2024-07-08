import React, {FormEvent, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "../modals/IForm";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from '../validators/userValidator';
import {baseUrl} from "../constants/api";
import styles from './FormComponent.module.css'

const FormComponent = () => {

    let {formState: {errors, isValid},
        register,
        handleSubmit}
        = useForm<IForm>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    let formPostCreator = (data: IForm) => {
        // console.log(data);

        const response =  fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({
                title: data.title,
                body: data.body,
                userId: data.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };



    return (
        <div className={styles.wrapper}>
            {errors.userId && <div className={styles.error}>user ID error: {errors.userId?.message}</div>}
            {errors.title && <div className={styles.error}>title error: {errors.title?.message}</div>}
            {errors.body && <div className={styles.error}>text error: {errors.body?.message}</div>}
            <form onSubmit={handleSubmit(formPostCreator)} className={styles.formContent}>
                <label htmlFor="userId">User ID: </label>
                <input type="number" id='userId' {...register('userId')} className={styles.input}/>
                <label htmlFor="title">Title: </label>
                <input type="text" id='title'{...register('title')} className={styles.input}/>
                <label htmlFor="body">text: </label>
                <input type="text" id='body' {...register('body')} className={styles.input}/>

                <button disabled={!isValid} className={styles.btn}>Надіслати</button>

            </form>


        </div>
    );
};

export default FormComponent;