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

export const postRegister = (data) => {
  data.role = "1";
  data.username = data.email;
  data.password = data.email;
  const url = `http://localhost:1337/api/users`;
  const response = axios.post(url, data);
  return response;
};

export const login = () => {
  const url = `${baseUrl}/api/auth/login`;
};

export { getContents, getContent, getRegistrationData };
