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

export const getCountriesWithPagination = async (pageIndex, pageSize) => {
    try {
        const response = await axios.get(
            `${baseUrl}/api/destinations?populate=deep&sort[0]=title%3Aasc&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}&filters[$or][1][type][$contains]=country`
        );
       
        return response.data;
    } catch (err) {
        throw err; // throw the error to be caught by the caller
    }
};


export const getDestinationBySlug = async (slug: string) => {

    try {
        const response = await axios.get(
            `${baseUrl}/api/destinations?populate=deep&filters[slug][$eq]=${slug}`
        );
        // ${baseUrl}/api/interests?populate=deep&filters[slug][$eq]=${slug}
        return response.data;
    } catch (err) {
        throw err; // throw the error to be caught by the caller
    }
};
