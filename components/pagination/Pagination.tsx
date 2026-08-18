"use client";
import { useState } from "react";
import Button from "../button/Button";
import { LeftIcon, RightIcon } from "../icons/Icons";

type PaginationProps = {
  totalPages: number;
  iconOnly?: boolean;
  onPageChange?: (page: number) => void;
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

const Pagination = ({
  totalPages,
  iconOnly,
  onPageChange,
}: PaginationProps) => {
  const [page, setPage] = useState(1);
  const changePage = (nextPage: number) => {
    setPage(nextPage);
    onPageChange?.(nextPage);
  };

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-col justify-center gap-2 px-6 pt-3 pb-4"
    >
      <div className="flex items-center justify-center rounded bg-white p-1">
        <ul className="flex items-center justify-center gap-2 p-2">
          <Button
            key={"prev"}
            size="md"
            variant="linkGray"
            text="Previous"
            iconOnly={iconOnly}
            iconPosition="left"
            icon={LeftIcon}
            disabled={page === 1}
            onClick={() => changePage(Math.max(1, page - 1))}
            className="flex items-center justify-center gap-2 px-4 py-1.5"
          />

          {getPageNumbers(totalPages, page).map((pageNumber, index, pages) => [
            index > 0 && pageNumber - pages[index - 1] > 1 && (
              <li key={`ellipsis-${pageNumber}`}>
                <span className="px-2 text-neutral-600" aria-hidden="true">
                  ...
                </span>
              </li>
            ),
            <li key={pageNumber}>
              <Button
                size="md"
                variant="linkGray"
                text={String(pageNumber)}
                ariaCurrent={page === pageNumber ? "page" : undefined}
                onClick={() => changePage(pageNumber)}
                className={`flex size-10 items-center justify-center hover:bg-white hover:text-neutral-900 hover:shadow-sm hover:ring-1 hover:ring-neutral-200 ${
                  page === pageNumber
                    ? "bg-white text-neutral-900 shadow-sm ring-1 ring-neutral-200"
                    : ""
                }`}
              />
            </li>,
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
            onClick={() => changePage(Math.min(totalPages, page + 1))}
            className="flex items-center justify-center gap-2 px-4 py-1.5"
          />
        </ul>
      </div>
    </nav>
  );
};
export default Pagination;
