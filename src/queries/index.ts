import { Attributes } from './../types/experience';
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

    // const url = `${baseUrl}/api/users`;
    const url = `${baseUrl}/api/users`;
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return false;
  }
};
export const updateUser = async (data, id) => {

  try {
    data.username = data.email;
    const url = `${baseUrl}/api/users/${id}`;
    const response = await axios.put(url, data);
    return response;
  } catch (error) {
    return false;
  }
};
export const deleteUser = async (data, id) => {

  try {
    const url = `${baseUrl}/api/users/${id}`;
    const response = await axios.delete(url, data);
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

const getCookiePopups = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/cookie-popups?populate=deep`);
    return response.data;
  } catch (error) {
    // Handle error gracefully
    console.error("Failed to fetch cookie pop-ups:", error);
    throw error;
  }
}


const getTermsConditionData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/terms-and-and-condition?populate=deep`
    );

    return response?.data?.data?.attributes;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
}


export async function getDepartures() {
  const apiUrl = `${baseUrl}/api/departures/?populate=deep`;

  try {
    const response = await axios.get(apiUrl);
    return response?.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getDestinations() {
  const apiUrl = `${baseUrl}/api/destinations?populate=deep&pagination[page]=1&pagination[pageSize]=1000`;

  try {
    const response = await axios.get(apiUrl);
    return response?.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getSeasons() {
  const apiUrl = `${baseUrl}/api/seasons/?populate=deep`;

  try {
    const response = await axios.get(apiUrl);
    return response?.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const forgotPasswordByEmail = async (email) => {
  try {
    const url = `${baseUrl}/api/auth/forgot-password`;
    const response = await axios.post(url, email);
    return response;
  } catch (error) {
    return false;
  }
}
const resetPasswordByLink = async (data) => {
  try {
    const url = `${baseUrl}/api/auth/reset-password`;
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return false;
  }
}

const sendEmailConfirmation = async (email) => {
  try {
    const url = `${baseUrl}/api/auth/send-email-confirmation`;
    const response = await axios.post(url, {email});
    return response.data;
  } catch (error) {
    return false;
  }
}

const registerEmailConfirmation = async (query) => {
  try {
    const url = `${baseUrl}/api/auth/email-confirmation?confirmation=${query}`;
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return false;
  }
}

const getUserDetailById = async (id: number) => {
  try {
    const url = `${baseUrl}/api/users/${id}?populate=deep`;
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return false;
  }
}

export const login = () => {
  const url = `${baseUrl}/api/auth/login`;
};

export { getContents, getContent, getRegistrationData, getHomePageData, forgotPasswordByEmail, resetPasswordByLink, getCookiePopups, getUserDetailById, registerEmailConfirmation, sendEmailConfirmation,getTermsConditionData };
