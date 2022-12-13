import React from 'react';

const Pagination = ({
    totalTasks,
    tasksPerPage,
    setCurrentPage,
    currentPage,
}) => {

    let pages = []

    for(let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
        pages.push(i);
    }
  return (
    <div>
        <ul className='pagination'>
            {pages.map((page, index) => (
                <li className='page-item'>
                    <a 
                    href='#' 
                    onClick={() => setCurrentPage(page)}
                    className={page == currentPage ? 'page-link active' : 'page-link'}
                    >
                        {page}
                    </a>
                </li> 
            ))}
        </ul>
    </div>
  )
}

export default Pagination