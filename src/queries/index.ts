import axios from "axios";
import { getContents } from "./content/index";
import { baseUrl } from "@/utils";

const getExperiences = async () => getContents("experience");

const getContent = async (id: string) => {
  const response = await axios.get(
    `${baseUrl}/api/contents/${id}?populate=deep`
  );
  return response.data;
};

const getEstates = async () => getContents("estate");

const getOffers = async () => getContents("offer");

export { getContents, getContent, getExperiences, getEstates, getOffers };
