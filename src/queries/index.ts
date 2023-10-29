import axios from "axios";
import { getContents } from "./content/index";
import { baseUrl } from "@/utils";

const getContent = async (id: string) => {
  const response = await axios.get(
    `${baseUrl}/api/contents/${id}?populate=deep`
  );
  return response.data;
};

const getRegistrationData = async () => {
  const response = await axios.get(`${baseUrl}/api/regdata`);
  return response.data;
};

export const postRegister = async (data) => {
  try {
    data.role = "1";
    data.username = data.email;

    const url = `${baseUrl}/api/users`;
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return false;
  }
};

 const getHomePageData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/homepage?populate=deep`
    );

    return response?.data?.data?.attributes;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
}

export const login = () => {
  const url = `${baseUrl}/api/auth/login`;
};

export { getContents, getContent, getRegistrationData, getHomePageData };
