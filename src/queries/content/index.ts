import axios, { AxiosResponse } from "axios";
import { IContentResponse } from "./content";
import { baseUrl } from "../../utils";

export const defaultParams = `?populate=deep&&sort[0]=createdAt%3Adesc&filters[content_type][name][$eq]=`;

export const getContents = async (
  params: string = "content"
): Promise<IContentResponse> => {
  try {
    const response: AxiosResponse<IContentResponse> = await axios.get(
      `${baseUrl}/api/contents${defaultParams}${params}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};

// Search https://bloom-backend-er4oo.ondigitalocean.app/api/fuzzy-search/search?query=

export const getSearch = async (query: string): Promise<any> => {
  try {
    const response: AxiosResponse<IContentResponse> = await axios.get(
      `${baseUrl}/api/contents?populate=*&filters[$or][0][name][$contains]=${query}&filters[$or][1][description][$contains]=${query}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};
