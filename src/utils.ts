import dynamic from "next/dynamic";

export const baseUrl = "https://bloom-backend-er4oo.ondigitalocean.app";

export function shortenDescription(htmlDescription: string) {
  if (typeof window === "undefined") return null; // temp fix
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlDescription, "text/html");
  const scriptElement = doc.querySelector("span");
  const description = scriptElement ? scriptElement.textContent : "";
  const firstSentence = description?.split(".")[0];
  return firstSentence;
}

export const mapPermaLink = (type: string) => {
  const map = {
    experience: {
      path: "/experiences",
      buttonText: "Read more",
      categoryName: "Experience",
    },
    estate: {
      path: "/partner-estates",
      buttonText: "Read more",
      categoryName: "Partner Gardens",
    },
    offer: {
      path: "/offers",
      buttonText: "Read more",
      categoryName: "Offers",
    },
    content: {
      path: "/discover",
      buttonText: "Read more",
      categoryName: "Discover",
    },
  };
  return map[type];
};

// Find url in description and replace it with a link
export const replaceUrlWithLink = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });
};

export const ImageSlider = dynamic(
  () => import("@/containers/atoms/ImageSlider"),
  {
    ssr: false,
    loading: () => null,
  }
);

export const mapDynamicGallery = (data) => {
  return data.map((item) => ({
    id: item.id,
    image: {
      src: item.attributes.url,
      alt: item.attributes.name,
      caption: item.attributes.caption,
    },
  }));
};
