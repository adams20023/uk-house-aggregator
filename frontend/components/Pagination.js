import React from 'react';
import { useRouter } from 'next/router';

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();

  const createPageLinks = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`px-3 py-1 mx-1 rounded-md ${
            i === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const handlePageChange = (page) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-8">
      {createPageLinks()}
    </div>
  );
};

export default Pagination;

