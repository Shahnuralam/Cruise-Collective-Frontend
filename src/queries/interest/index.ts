import axios from "axios";
import { baseUrl } from "../../utils";

export const defaultParams = `?populate=deep&&sort[0]=createdAt%3Adesc&filters[content_type][name][$eq]=`;

export const getInterests = async (pageIndex, pageSize) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/interests?populate=deep&sort[0]=title%3Aasc&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`
    );

    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};
