// SeoContext.js
import { createContext } from "react";

const initialSeoValues = {
  title: "",
  description: "",
  url: "",
  shareImage: "",
  keywords: "",
  preventIndexing: false,
  metaTitle: "",
  metaDescription: "",
  metaImage: "",
  metaSocial: [
    // Example of a single social component
    {
      socialNetwork: "Facebook",
      title: "",
      description: "",
      image: "",
    },

    {
      socialNetwork: "Twitter",
      title: "",
      description: "",
      image: "",
    },
    {
      socialNetwork: "Instagram",
      title: "",
      description: "",
      image: "",
    },
  ],
  canonicalURL: "",
  metaRobots: "",
  structuredData: {},
  metaViewport: "",
  // Add more fields as needed
};

const SeoContext = createContext(initialSeoValues);

export default SeoContext;
