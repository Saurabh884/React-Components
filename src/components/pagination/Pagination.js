import React from 'react'
import "./index.css"

const Pagination = ({handlePageClick,totalPages,currentPageNumber}) => {
    const handlePrevious = () => {
        if(currentPageNumber>1){
            handlePageClick(currentPageNumber-1)
        }
    }
    const handleNext = () => {
        if(currentPageNumber<totalPages){
            handlePageClick(currentPageNumber+1)
        }
    }

    const handlePageClickFn = (page) => {
        handlePageClick(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button 
                    key={i} 
                    className={`page-number ${currentPageNumber === i ? 'active' : ''}`}
                    onClick={() => handlePageClickFn(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };
  return (
    <div>
        <div className='pagination-ui'>
            <button onClick={handlePrevious} disabled={currentPageNumber === 1}>Previous</button>
              <div> {renderPageNumbers()}</div>
              <button onClick={handleNext} disabled={currentPageNumber === totalPages}>Next</button>
        </div>
    </div>
  )
}

export default Pagination