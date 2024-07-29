import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {AxiosError} from "axios";
import {CarPaginatedModel} from "../models/CarPaginatedModel";
import CarsComponent from "../components/CarsComponent";

const CarsPage = () => {

    const [carPaginatedObject, setCarPaginatedObject] = useState<CarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    })
    useEffect(() => {

        const getCarsData = async () => {
            try {
                let response = await carService.getCars();

                setCarPaginatedObject(response);

            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    console.log(axiosError);

                }
            }
        }

        getCarsData();

    }, []);
    return (
        <div>
            <CarsComponent cars={carPaginatedObject.items}/>
        </div>
    );
};

export default CarsPage;