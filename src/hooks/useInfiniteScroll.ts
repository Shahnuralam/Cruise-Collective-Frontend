import { useState, useEffect } from "react";
// import { getCruiseLines } from "@/queries/cruise-line";

const useInfiniteScroll = (apiMethod) => {
    const [cards, setCards] = useState<any>([]);
    const [pageIndex, setPageIndex] = useState(1);
    const pageSize = 8;
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading ] = useState(false)


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
        const fetchData = async () => {
            setIsLoading(true);
            try {
                await fetchMoreData();
                // Handle data after fetching (if needed)
            } catch (error) {
                // Handle errors if fetchMoreData() fails
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData(); // Invoke the async function
    
        // The empty dependency array ensures that this effect runs once after the initial render.
    }, []);

    return { isLoading, cards, hasMore, fetchMoreData };
};

export default useInfiniteScroll;
