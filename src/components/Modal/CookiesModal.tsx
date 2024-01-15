import { useEffect, useState } from "react";
import { getCookiePopups } from "@/queries";

interface ICookiePopup {
  attributes: {
    title: string;
    description: string;
    buttons: { label: string }[];
  };
}

const CookiesModal = () => {
  const [cookiePopups, setCookiePopups] = useState<ICookiePopup[]>([]);
  const [showCookiesModal, setShowCookiesModal] = useState(true);

  useEffect(() => {
    const isAcceptedCookie = localStorage.getItem("acceptedCookies");
    if(!isAcceptedCookie){
      fetchCookiePopups();
    }
  }, []);

  const fetchCookiePopups = async () => {
    try {
      const { data } = await getCookiePopups();
      setCookiePopups(data);
    } catch (error) {
      console.error("Error fetching cookie popups:", error);
    }
  };

  const handleAcceptCookies = () => {
    localStorage.setItem("acceptedCookies", "true");
    setShowCookiesModal(false);
  };

  return (
    <>
      {showCookiesModal && cookiePopups?.length > 0 && (
        <div className="fixed bottom-0 z-50 left-0 right-0 bg-cruise p-4 ">
          <h1 className="pb-4 text-xs apercu_medium font-medium uppercase tracking-[3px] leading-4 text-black">
            {cookiePopups[0].attributes.title}
          </h1>
          <div>
            {cookiePopups[0].attributes.description}{" "}
            <button
              className="border-[1.5px] text-xs tracking-[3px] leading-4  border-[#d9944c] py-3 px-8 hover:bg-[#d9944c] apercu_medium_pro ml-3"
              onClick={handleAcceptCookies}
            >
              {cookiePopups[0].attributes.buttons[0].label}
            </button>
            <a
              href="/privacy-policy" // Replace with the actual link to your privacy policy
              className="bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded hover:underline"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiesModal;
