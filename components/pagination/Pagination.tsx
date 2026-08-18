"use client";
import { useState } from "react";
import Button from "../button/Button";
import { LeftIcon, RightIcon } from "../icons/Icons";

type PaginationProps = {
  totalPages: number;
  iconOnly?: boolean;
};

const getPageNumbers = (totalPages: number, currentPage: number) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const visiblePages = new Set([
    1,
    2,
    totalPages - 1,
    totalPages,
    currentPage,
    currentPage - 1,
    currentPage + 1,
  ]);

  return [...visiblePages]
    .filter((pageNumber) => pageNumber >= 1 && pageNumber <= totalPages)
    .sort((firstPage, secondPage) => firstPage - secondPage);
};

const Pagination = ({ totalPages, iconOnly }: PaginationProps) => {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col justify-center gap-2 px-6 pt-3 pb-4">
      <div className="flex items-center justify-center rounded bg-white p-1">
        <div className="flex items-center justify-center gap-2 p-2">
          <Button
            key={"prev"}
            size="md"
            variant="linkGray"
            text="Previous"
            iconOnly={iconOnly}
            iconPosition="left"
            icon={LeftIcon}
            disabled={page === 1}
            onClick={() =>
              setPage((currentPage) => Math.max(1, currentPage - 1))
            }
            className="flex items-center justify-center gap-2 px-4 py-1.5"
          />

          {getPageNumbers(totalPages, page).map((pageNumber, index, pages) => [
            index > 0 && pageNumber - pages[index - 1] > 1 && (
              <span
                key={`ellipsis-${pageNumber}`}
                className="px-2 text-neutral-600"
              >
                ...
              </span>
            ),
            <Button
              key={pageNumber}
              size="md"
              variant="linkGray"
              text={String(pageNumber)}
              onClick={() => setPage(pageNumber)}
              className={`flex size-10 items-center justify-center hover:bg-white hover:text-neutral-900 hover:shadow-sm hover:ring-1 hover:ring-neutral-200 ${
                page === pageNumber
                  ? "bg-white text-neutral-900 shadow-sm ring-1 ring-neutral-200"
                  : ""
              }`}
            />,
          ])}

          <Button
            key={"next"}
            size="md"
            variant="linkGray"
            text="Next"
            iconOnly={iconOnly}
            iconPosition="right"
            icon={RightIcon}
            disabled={page === totalPages}
            onClick={() =>
              setPage((currentPage) => Math.min(totalPages, currentPage + 1))
            }
            className="flex items-center justify-center gap-2 px-4 py-1.5"
          />
        </div>
      </div>
    </div>
  );
};
export default Pagination;
