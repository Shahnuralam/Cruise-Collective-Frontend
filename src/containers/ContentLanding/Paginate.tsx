import React, { useCallback, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import ChevronRightIcon from "@/assets/svg/chevron-right.svg";
import clsx from "clsx";

export interface IPaginateProps {
  pageCount?: number;
  onPageChange?: (selectedPage: number) => void;
}

export const Paginate: React.FC<IPaginateProps> = (props) => {
  const { pageCount = 12, onPageChange } = props;
  const [pageIdx, setPageIdx] = useState<number>(0);

  const handlePageClick = useCallback(
    (event: { selected: number }) => {
      const { selected } = event;
      setPageIdx(selected);

      if (onPageChange) onPageChange(selected + 1);
    },
    [onPageChange]
  );

  const getPageConditions = useCallback(
    (idx: number) => {
      return {
        isFirstPage: idx === 0,
        isLastPage: pageCount - 1 === idx,
      };
    },
    [pageCount]
  );

  const currentPageConditions = useMemo(() => {
    return getPageConditions(pageIdx);
  }, [getPageConditions, pageIdx]);

  const prevLabel = useMemo(() => {
    return (
      <div
        onClick={() =>
          setPageIdx((prev) =>
            getPageConditions(prev).isFirstPage ? 0 : prev - 1
          )
        }
        className="flex items-center gap-2 font-semibold text-[#4f6355] cursor-pointer select-none"
      >
        <div className="text-[#36453b]">
          <ChevronRightIcon
            viewBox="0 0 48 48"
            width="1rem"
            height="1rem"
            className="transform -rotate-180"
          />
        </div>
        <span>Prev</span>
      </div>
    );
  }, [setPageIdx, getPageConditions]);

  const nextLabel = useMemo(() => {
    return (
      <div
        onClick={() =>
          setPageIdx((prev) =>
            getPageConditions(prev).isLastPage ? pageCount : prev + 1
          )
        }
        className="flex items-center gap-2 font-semibold text-[#4f6355] cursor-pointer select-none"
      >
        <span>Next</span>
        <div className="text-[#36453b]">
          <ChevronRightIcon viewBox="0 0 48 48" width="1rem" height="1rem" />
        </div>
      </div>
    );
  }, [setPageIdx, getPageConditions, pageCount]);

  return (
    <div
      className={clsx(
        "flex w-full flex-col md:flex-row items-center relative gap-4 py-4 mt-3 lg:mt-6",
        {
          "md:justify-end": currentPageConditions.isFirstPage,
          "md:justify-start": currentPageConditions.isLastPage,
          "md:justify-between": Boolean(
            !currentPageConditions.isFirstPage &&
              !currentPageConditions.isLastPage
          ),
        }
      )}
    >
      {/** Prev */}
      {!currentPageConditions.isFirstPage && (
        <div className="hidden md:flex">{prevLabel}</div>
      )}

      {/** Pages */}
      <ReactPaginate
        className="flex gap-2 lg.gap-3 md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 select-none"
        breakLabel="..."
        //
        breakClassName="flex justify-center items-center font-semibold text-black text-opacity-90"
        containerClassName="pagination justify-content-center"
        pageClassName="select-none"
        pageLinkClassName="flex justify-center items-center  font-semibold text-opacity-90 w-[35px] h-[35px] lg:w-[40px] lg:h-[40px]"
        activeClassName="rounded-full bg-[#36453b] !text-white"
        //
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        forcePage={pageIdx}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        nextLabel={null}
        previousLabel={null}
      />

      {/** Next */}
      {!currentPageConditions.isLastPage && (
        <div className="hidden md:flex">{nextLabel}</div>
      )}

      {/** for mobile*/}
      <div className="flex md:hidden gap-4 flex-wrap">
        {/** Prev */}
        {!currentPageConditions.isFirstPage && (
          <div className="flex">{prevLabel}</div>
        )}

        {/** Next */}
        {!currentPageConditions.isLastPage && (
          <div className="flex">{nextLabel}</div>
        )}
      </div>
    </div>
  );
};
