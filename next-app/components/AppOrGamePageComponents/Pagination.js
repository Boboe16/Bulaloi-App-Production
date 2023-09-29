import React, { useState, useEffect } from 'react';

function Pagination({ currentPage, setCurrentPage, appNames, updateAppList }) {
  const appsPerPage = 10;
  const maxButtonsToShow = 4;

  // Calculate the indexes of the app names to display on the current page
  const indexOfLastApp = currentPage * appsPerPage;
  const indexOfFirstApp = indexOfLastApp - appsPerPage;
  const currentAppNames = appNames.slice(indexOfFirstApp, indexOfLastApp);

  // This useEffect updates the appList state in the parent component by the currentAppNames
  useEffect(() => {
    // I defined this function to avoid the error(what was it again? xD)
  	function toUpdateAppNamesAndRerender() {
  		updateAppList(currentAppNames)
  	}

  	toUpdateAppNamesAndRerender();
  }, [currentPage]);

  // Handle pagination button clicks
  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // Helper function to generate pagination buttons
  const generatePaginationButtons = () => {
    const totalPages = Math.ceil(appNames.length / appsPerPage);

    const buttons = [];
    let startPage;
    let endPage;

    if (totalPages <= maxButtonsToShow) {
      // Show all page numbers if there are less than or equal to maxButtonsToShow
      startPage = 1;
      endPage = totalPages;
    } else {
      // Calculate the range of page numbers to display when there are more pages
      startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
      endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

      // Adjust the startPage to ensure there are exactly maxButtonsToShow pages shown
      if (endPage - startPage + 1 < maxButtonsToShow) {
        startPage = endPage - maxButtonsToShow + 1;
      }
    }

    // "First" button
    if (currentPage > 1) {
      buttons.push(
        <li key="first" className="page-item">
          <button className="" onClick={() => handlePageClick(1)}>
            &laquo;
          </button>
        </li>
      );
    }

    // "Previous" button
    buttons.push(
      <li key="previous" className="page-item">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
    );

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? 'active' : ''}`}
        >
          <button id="" className="hello2" onClick={() => handlePageClick(i)}>
            {i}
          </button>
        </li>
      );
    }

    // "Next" button
    buttons.push(
      <li key="next" className="page-item">
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    );

    // "Last" button
    if (currentPage < totalPages) {
      buttons.push(
        <li key="last" className="page-item">
          <button
            onClick={() => handlePageClick(totalPages)}
          >
            &raquo;
          </button>
        </li>
      );
    }

    return buttons;
  };

  return (
    <div className='row justify-content-center paginations'>
      <div className="row">
        <ul>
          {generatePaginationButtons()}
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
