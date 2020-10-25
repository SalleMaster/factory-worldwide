import React from 'react';

const Pagination = ({ docsPerPage, totalDocs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDocs / docsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination'>
      <ul className='pagination-wrapper'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <button
              onClick={() => paginate(number)}
              className={
                currentPage === number ? 'page-button active' : 'page-button'
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
