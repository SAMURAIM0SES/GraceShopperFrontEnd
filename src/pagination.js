import React from 'react';
import classes from './pagination.module.css';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes['pagination-body']}>
        {pageNumbers.map((number) => (
          <li key={number} className={classes['pagination-item']}>
            <button
              onClick={() => paginate(number)}
              className={classes['pagination-link']}
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

/*

<nav>
      <ul className={classes['pagination-body']}>
        {pageNumbers.map((number) => (
          <li key={number} className={classes['pagination-item']}>
            <a
              onClick={() => paginate(number)}
              className={classes['pagination-link']}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
*/
