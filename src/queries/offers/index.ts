
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../utils";

export const defaultParams = `?populate=deep&&sort[0]=createdAt%3Adesc&filters[content_type][name][$eq]=`;

export const getOffers = async (pageIndex, pageSize) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/offers?populate=deep&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};