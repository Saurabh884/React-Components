import React, { useState } from 'react'
import Pagination from './Pagination';

const PaginationApp = () => {
    const totalPages = 10;
    const [currentPage , setCurrentPage] = useState(1)
    const onPageChange = (page) => {
        setCurrentPage(page)
    }
  return (
    <div>
        <h1> Pagination App</h1>
        <Pagination handlePageClick={onPageChange} totalPages={totalPages} currentPageNumber={currentPage} />
        <div className="content">
                <p>Current Page: {currentPage}</p>
            </div>
    </div>
  )
}

export default PaginationApp;