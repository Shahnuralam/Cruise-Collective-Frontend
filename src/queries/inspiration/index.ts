import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../utils";

export const getInspirations = async (pageIndex, pageSize) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/insiprations?populate=deep&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`
    );

    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};
export const getAllInspirations = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/insiprations?populate=deep`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};

