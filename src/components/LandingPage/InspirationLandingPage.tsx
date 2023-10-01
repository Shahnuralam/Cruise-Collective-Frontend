import React, { useEffect, useState } from "react";
import { InspirationLandingData } from "../Interface/Inspiration";
import InspirationCard from "../Card/InspirationCard";
import DataLoadingFinishedText from "../DataLoadingFinishedText";

const InspirationLandingPage = () => {
  const inspirationData: InspirationLandingData[] = [
    {
      id: 1,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle.png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 2,
      name: "What are some River Cruise essential lugagge?",
      image: "/dummy/inspiration/Rectangle (1).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 3,
      name: "The top 10 most expensive cruise destinations",
      image: "/dummy/inspiration/Rectangle (2).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 4,
      name: "The top 10 most expensive cruise destinations",
      image: "/dummy/inspiration/Rectangle (3).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 5,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (4).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 6,
      name: "What cruise line fits your personality?",
      image: "/dummy/inspiration/Rectangle (5).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 7,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 8,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 9,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 9,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 10,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 11,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 12,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 13,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 14,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 15,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 16,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 17,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 18,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
    {
      id: 19,
      name: "5 Cruises you MUST consider in Summer 2023",
      image: "/dummy/inspiration/Rectangle (6).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. diam nonummy nibh euismod tincidunt ",
    },
  ];

  const [cards, setCards] = useState(inspirationData.slice(0, 10)); // Initial cards
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

  // Attach scroll event listener to load more cards when reaching the bottom
  useEffect(() => {
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
  }, [cards]);

  return (
    <div>
      <div className="card-container my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
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
