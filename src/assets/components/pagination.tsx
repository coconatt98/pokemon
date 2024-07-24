import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const maxPagesToShow = 5;
  const halfMaxPages = Math.floor(maxPagesToShow / 2);

  let startPage = Math.max(1, currentPage - halfMaxPages);
  let endPage = Math.min(totalPages, currentPage + halfMaxPages);

  if (currentPage <= halfMaxPages) {
    endPage = Math.min(totalPages, maxPagesToShow);
  } else if (currentPage + halfMaxPages >= totalPages) {
    startPage = Math.max(1, totalPages - maxPagesToShow + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="flex justify-center space-x-2 my-4">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 border bg-white font-semibold bg-opacity-50 rounded-full"
        >
          Previous
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded-full font-semibold bg-opacity-50 px-4 py-2 border ${
            page === currentPage
              ? "bg-blue-500 bg-opacity-50 rounded-lg text-white"
              : "bg-white"
          }`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 border bg-white font-semibold bg-opacity-50 rounded-full"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
