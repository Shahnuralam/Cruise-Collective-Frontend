import React, { useEffect, useState } from "react";
import InspirationCard from "../Card/InspirationCard";
import DataLoadingFinishedText from "../DataLoadingFinishedText";
import { InspirationLandingData, inspirationData } from "../Interface/InspirationDataDto";
const InspirationLandingPage = ({isInfiniteDataLoading}) => {

  const [cards, setCards] = useState<InspirationLandingData[]>([]); // Initial cards
  const [loading, setLoading] = useState(false);
  const [isDataLoadingFinished, setIsDataLoadingFinished] =
    useState<boolean>(false);

  const loadMoreCards = () => {
    setLoading(true);
    setTimeout(() => {
      // data fetching logic
      const startIndex = cards.length;
      const endIndex = startIndex + 10; //"Load more" when there are 10 items, and increase the count by 10 when needed.
      const newCards = inspirationData.slice(startIndex, endIndex);
      setCards([...cards, ...newCards]);
      setLoading(false);
    }, 1500);
  };

  useEffect(() =>{
    if(isInfiniteDataLoading) {
      setCards(inspirationData.slice(0, 10))
    }
    else {
      setCards(inspirationData.slice(0, 5))
    }
  },[])
  // Attach scroll event listener to load more cards when reaching the bottom

  useEffect(() => {
    if(isInfiniteDataLoading){
    const footer = document.getElementById("footerId") as HTMLElement;
    const footerHeight = footer.offsetHeight;
    const handleScroll = () => {
      if (
        window.innerHeight +
          document.documentElement.scrollTop +
          footerHeight -
          80 >=
        document.documentElement.offsetHeight
      ) {
        if (cards.length === inspirationData.length) {
          setIsDataLoadingFinished(true);
        } else {
          loadMoreCards();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
  }, [cards]);
 

  return (
    <div>
      <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {cards.map((inspiration) => (
          <InspirationCard key={inspiration.id} inspiration={inspiration} />
        ))}
      </div>
      <div className="py-3">
        {loading && <p className="text-sm">Loading...</p>}
      </div>

      {isDataLoadingFinished && (
        <DataLoadingFinishedText text="All articles loaded" />
      )}
    </div>
  );
};

export default InspirationLandingPage;
