
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../utils";

export const defaultParams = `?populate=deep&&sort[0]=createdAt%3Adesc&filters[content_type][name][$eq]=`;

export const getOffers = async (pageIndex, pageSize) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/offers?populate=deep&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}?preview=true`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};
export const getAllOffers = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/offers?populate=deep?preview=true`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};
export const getOfferById = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/offers/${id}?populate=deep?preview=true`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};

export const getOfferBySlug = async (slug) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/offers?populate=deep&filters[slug][$eq]=${slug}?preview=true`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};

export const getTravelOfferBySlug = async (slug) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/travel-partner-offers?populate=deep&filters[slug][$eq]=${slug}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // throw the error to be caught by the caller
  }
};
