

import axios from "axios";
import { baseUrl } from "../../utils";


export const getCruiseLines = async (pageIndex, pageSize) => {
    try {
        const response = await axios.get(
            `${baseUrl}/api/cruise-lines?populate=deep&sort[0]=title%3Aasc&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`
        );

        return response.data;
    } catch (err) {
        console.error(err);
        throw err; // throw the error to be caught by the caller
    }
};

export const getTravelPartner = async (pageIndex, pageSize) => {
    try {
        const response = await axios.get(
            `${baseUrl}/api/travel-partner-offers?populate=deep&sort[0]=title%3Aasc&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`
        );

        return response.data;
    } catch (err) {
        console.error(err);
        throw err; // throw the error to be caught by the caller
    }
};
