import { useState, useEffect } from "react";
// import { getCruiseLines } from "@/queries/cruise-line";

const useInfiniteScroll = (apiMethod) => {
    const [cards, setCards] = useState<any>([]);
    const [pageIndex, setPageIndex] = useState(1);
    const pageSize = 8;
    const [hasMore, setHasMore] = useState(true);


    const fetchMoreData = async () => {
        try {
            const data = await apiMethod(pageIndex, pageSize);
            setCards([...cards, ...data.data]);

            const updatedCardsLength = cards?.length + data?.data?.length; // Calculate the updated length of cards

            if (updatedCardsLength === data?.meta?.pagination?.total) {
                setHasMore(false);
            } else {
                setPageIndex(pageIndex + 1);
            }
        } catch (error) {
            console.log('something went wrong');
        }
    };

    useEffect(() => {
        fetchMoreData();
    }, []);

    return { cards, hasMore, fetchMoreData };
};

export default useInfiniteScroll;
