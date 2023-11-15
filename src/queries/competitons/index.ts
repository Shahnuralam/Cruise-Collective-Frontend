import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../utils";

export const getCompetitions = async (pageIndex, pageSize) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/competitions?populate=deep&sort[0]=title%3Aasc&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`
    );

    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};