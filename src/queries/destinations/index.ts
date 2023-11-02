// https://cruise-app-yizsa.ondigitalocean.app/api/destinations?populate=deep&filters[$or][1][type][$contains]=continent


import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../utils";


export const getContinents = async () => {
    try {
        const response = await axios.get(
            `${baseUrl}/api/destinations?populate=deep&filters[$or][1][type][$contains]=continent`
        );
        return response.data;
    } catch (err) {
        throw err; // throw the error to be caught by the caller
    }
};

export const getCountries = async () => {
    try {
        const response = await axios.get(
            `${baseUrl}/api/destinations?populate=deep&filters[$or][1][type][$contains]=country`
        );
        return response.data;
    } catch (err) {
        throw err; // throw the error to be caught by the caller
    }
};

export const getDestinationById = async (id: string, type: string) => {
    try {
        const response = await axios.get(
            `${baseUrl}/api/destinations/${id}?populate=deep&filters[$or][1][type][$contains]=${type}`
        );
        return response.data;
    } catch (err) {
        throw err; // throw the error to be caught by the caller
    }
};
