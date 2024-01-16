import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import axios from "axios";

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


export const sendNewsLetterEmail = async(data) => {

  if (typeof window === "undefined") return null; 

  const name = data.email.split("@")[0];
    const subject = "Newsletter Email from Cruise Collective";
    try {
      const NewsletterTemplate = `
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Cruise Collective's Newsletter!</h1>
        <p>
          Dear ${name},<br />
          Welcome to Cruise Collective's Newsletter! We are thrilled to have you on board.
        </p>
        <p>
          Thank you for subscribing to our newsletter. By joining our community, you'll be the first to receive exciting updates, exclusive offers, and valuable insights from the world of travel and adventure.
        </p>
        <p>Here's what you can expect from our newsletter:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Travel Tips and Tricks</li>
          <li>Destination Spotlights</li>
          <li>Exclusive Promotions and Discounts</li>
          <li>Inspiring Travel Stories</li>
        </ul>
        <p>
          Stay connected with Cruise Collective to embark on incredible journeys and discover new horizons. Your wanderlust will thank you for it!
        </p>
        <p>
          If you ever have any questions, feedback, or simply want to share your travel stories with us, please feel free to reach out at <a className="text-blue-500 hover:underline" href="mailto:hello@cruise-collective.com">hello@cruise-collective.com</a>.
        </p>
        <p>
          To get started, keep an eye on your inbox for our upcoming newsletter. You won't want to miss it!
        </p>
        <p className="mt-4">Once again, welcome to Cruise Collective. We can't wait to explore the world together!</p>
        <p className="text-gray-600 mt-8">Bon voyage!</p>
      </div>
      </div>
      
      `;

      const { email } = data;
      const body = {
        email,
        subject,
        emailTemplate: NewsletterTemplate,
      };

      const sendGridResponse = await axios.post("/api/sendEmail", body);

    } catch (error) {
      console.error(error);
    }
}
