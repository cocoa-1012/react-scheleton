import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const paginationItemClasses = `border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`;
const Pagination = (props) => {
  const {
    itemPerPage,
    setItemPerPage,
    totalPage,
    currentPage,
    setCurrentPage,
  } = props;
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((p) => p + 1);
    }
  };
  return (
    <div className='flex justify-between'>
      <div className=''>
        <select
          value={itemPerPage}
          onChange={(e) => setItemPerPage(e.target.value)}
          className='block h-full w-full appearance-none border-0 border-b bg-white py-2 pl-2 pr-8 leading-tight text-gray-700 outline-none'
        >
          {[5, 10, 20, 30, 50].map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <nav aria-label='Page navigation example'>
        <ul className='inline-flex items-center -space-x-px'>
          <li onClick={prevPage}>
            <span
              className={`ml-0 block rounded-l-lg  ${
                currentPage === 1 ? 'cursor-not-allowed ' : ''
              } ${paginationItemClasses}`}
            >
              <span className='sr-only'>Previous</span>
              <FaAngleLeft />
            </span>
          </li>

          {Array.from(Array(totalPage)).map((_, i) => (
            <li onClick={(e) => setCurrentPage(i + 1)} key={Math.random()}>
              <span
                className={`${paginationItemClasses} ${
                  currentPage === i + 1 ? 'bg-green-400 hover:bg-green-500' : ''
                } `}
              >
                {i + 1}
              </span>
            </li>
          ))}

          <li onClick={nextPage}>
            <span
              className={`block rounded-r-lg ${
                currentPage === totalPage ? 'cursor-not-allowed ' : ''
              }  ${paginationItemClasses}`}
            >
              <span className='sr-only'>Next</span>
              <FaAngleRight />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
