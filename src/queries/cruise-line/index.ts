

import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../utils";


export const getCruiseLines = async (pageIndex, pageSize) => {
    try {
        const response = await axios.get(
            `${baseUrl}/api/cruise-lines?populate=deep&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`
        );
        // console.log(response);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err; // throw the error to be caught by the caller
    }
};
