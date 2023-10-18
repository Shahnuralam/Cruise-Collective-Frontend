import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../utils";

export const getInspirations = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/insiprations`
    );
    // console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};

