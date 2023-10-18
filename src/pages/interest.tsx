import InterestCard from "@/components/Card/InterestCard";
import PageHeading from "@/components/PageHeading";
import { getInterests } from "@/queries/interest";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const interest = () => {
  const [card, setCard] = useState<any>([]);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const pageSize = 4;
  const [loading, setLoading] = useState<boolean>(false);
   const [isDataLoadingFinished, setIsDataLoadingFinished] =
    useState<boolean>(false);
  const [total, setTotal] = useState(0);

  const pageHeaderData = {
    heading: "Cruise by interest",
    text: "Explore our latest selection of exclusive cruise deals by interest.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
  };

  const getCardData = async () => {
    const data: any = await getInterests(pageIndex, pageSize);
    setTotal(data?.meta?.pagination.total)
    setCard([...card, ...data.data]);
    
  };



  const handleInfiniteScroll = () => {
    const footerHeight = document.getElementById("footerId") as HTMLElement;

      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        console.log(card.length);
        setPageIndex((prev) => prev + 1);
      }
   
  };

  useEffect(() => {
    getCardData();
  }, [pageIndex]);

  // Attach scroll event listener to load more cards when reaching the bottom
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  // if(isLoading) {
  //   return <>Loading...</>
  // }

  return (
    <div className="p-3 md:p-[32px] lg:p-[75px]">
      <div>{card?.length}</div>
      <PageHeading pageHeaderData={pageHeaderData} />
      <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {card.map((interest, indx) => (
          <InterestCard key={indx} interest={interest} />
        ))}
      </div>
    </div>
  );
};

export default interest;
