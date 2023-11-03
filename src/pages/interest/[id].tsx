import FilterOffers from "@/components/Shared/FilterOffers";
import StrokeLine from "@/components/StrokeLine";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getOffers } from "@/queries/offers";
import { baseUrl } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const InterestDetail = ({ interest }) => {
  const [cardData, setCardData] = useState<any>([]);
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);

  useEffect(() => {
    const filterData = cards?.filter((card) =>
      card?.attributes?.interests?.data?.some((item) => item?.id === Number(id))
    );
    setCardData(filterData);
  }, [id, cards]);


  if (isLoading) {
    return <p className="min-h-screen p-[75px]">Loading</p>;
  }

  return (

    <div className=" p-8 md:p-[75px]">
      <div className="text-3xl md:text-[40px] text-black">
        {interest?.data?.attributes?.title}
      </div>
      <div className="py-5">
        <StrokeLine />
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: interest?.data?.attributes?.excerpt,
        }}
        className="pt-1 max-w-4xl text-black text-base"
      ></p>

      <div className="pt-[32px] lg:pt-[75px]">
        <FilterOffers
          finishedText="All offers loaded"
          offers={{ isLoading, cards: cardData, hasMore, fetchMoreData }}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  // Fetch product data from API based on productId
  const res = await fetch(`${baseUrl}/api/interests/${id}?populate=deep`);
  const interest = await res.json();

  return {
    props: {
      interest,
    },
  };
}

export default InterestDetail;
