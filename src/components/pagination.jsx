import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination size="md">
      <Pagination.Prev
        disabled={activePage === 1}
        onClick={() => paginate(activePage - 1)}
      />

      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={number === activePage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      ))}

      <Pagination.Next
        disabled={activePage === pageNumbers.length}
        onClick={() => paginate(activePage + 1)}
      />
    </Pagination>
  );
};
export default CustomPagination