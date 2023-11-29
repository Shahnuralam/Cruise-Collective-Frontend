import dynamic from "next/dynamic";
import { toast } from "react-toastify";

export const baseUrl = "https://cruise-app-yizsa.ondigitalocean.app";

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
export const FullScreenImageSlider = dynamic(
  () => import("@/containers/atoms/HeaderSlider"),
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

//
export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString('en-GB', options);

  // Split the date components and rearrange them
  const [day, month, year] = formattedDate.split('/');
  return `${day}.${month}.${year}`;
};


export const showToast = (message, type) => {
  toast[type](message, {
    autoClose: 5000, // 5 seconds
    position: "top-right", // You can adjust the position
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      // backgroundColor: "#FF9A31", // Background color
      color: "#FF9A31", // Font color
      fontFamily: "adobe-garamond-pro, serif", // Font family
      fontSize: "16px", // Font size
      latterSpacing: "2px", // Font letter spacing
    },
  });
};
