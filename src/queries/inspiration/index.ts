import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../utils";

export const defaultParams = `?populate=deep&&sort[0]=createdAt%3Adesc&filters[content_type][name][$eq]=`;

export const getAllInspiration = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/interests`
    );
    // console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};

