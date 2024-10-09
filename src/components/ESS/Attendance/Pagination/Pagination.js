import React from 'react';
import './Pagination.css';

const Pagination = ({ totalEntries, entriesPerPage, currentPage, onPageChange, onEntriesChange }) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <div className="r-pagination">
      <span>Showing {((currentPage - 1) * entriesPerPage) + 1} to {Math.min(currentPage * entriesPerPage, totalEntries)} of {totalEntries} entries</span>
      <div className="page-numbers">
        <span>Show</span>
        <select onChange={e => onEntriesChange(Number(e.target.value))} value={entriesPerPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <span>Entries</span>
        <div className="pages">
          {[...Array(totalPages)].map((_, index) => (
            <button 
              key={index} 
              onClick={() => onPageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;