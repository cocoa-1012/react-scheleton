import React from 'react';
import { FaAngleLeft, FaAngleRight, FaGithubSquare } from 'react-icons/fa';

const UsersTable = () => {
  return (
    <div className='col-span-full rounded-sm border border-slate-200 bg-white shadow-lg xl:col-span-8'>
      <div className='p-3'>
        <FilterBar />
        <hr className='my-3' />
        <Table />
        <hr className='my-3' />
        <Pagination />
      </div>
    </div>
  );
};

const FilterBar = () => {
  return (
    <div className='mb-3 flex items-center justify-end'>
      <div class='relative block'>
        <input
          placeholder='Search'
          type='search'
          class='block w-full appearance-none  border-0 border-b border-gray-400 bg-white py-2 px-1 text-sm text-gray-700 placeholder-gray-400 outline-none focus:bg-white focus:text-gray-700 focus:placeholder-gray-600 sm:rounded-l-none'
        />
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='custom-table w-full'>
        {/* Table header */}
        <thead>
          <tr>
            <th>
              <div className='text-left font-semibold'>Source</div>
            </th>
            <th>
              <div className='table-head'>Visitors</div>
            </th>
            <th>
              <div className='table-head'>Revenues</div>
            </th>
            <th>
              <div className='table-head'>Sales</div>
            </th>
            <th>
              <div className='table-head'>Conversion</div>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Row */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <tr key={Math.random()}>
              <td>
                <div className='flex items-center'>
                  <FaGithubSquare className='shrink-0' />
                  <div className='text-slate-800'>Github.com</div>
                </div>
              </td>
              <td>
                <div className='text-center'>
                  {(Math.random() * i * 10000).toFixed(0)}
                </div>
              </td>
              <td>
                <div className='text-center text-green-500'>
                  {'$'}
                  {(Math.random() * i * 1000).toFixed(0)}
                </div>
              </td>
              <td>
                <div className='text-center'>
                  {(Math.random() * i * 100).toFixed(0)}
                </div>
              </td>
              <td>
                <div className='text-center text-sky-500'>
                  {(Math.random() * i * 10).toFixed(0)}%
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Pagination = () => {
  return (
    <div className='flex justify-between'>
      <div className=''>
        <select class='block h-full w-full appearance-none border-0 border-b bg-white py-2 pl-2 pr-8 leading-tight text-gray-700 outline-none'>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
      <nav aria-label='Page navigation example'>
        <ul class='inline-flex items-center -space-x-px'>
          <li>
            <a
              href='#'
              class='ml-0 block rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <span class='sr-only'>Previous</span>
              <FaAngleLeft />
            </a>
          </li>

          <li>
            <a
              href='#'
              class='border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              1
            </a>
          </li>

          <li>
            <a
              href='#'
              class='block rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <span class='sr-only'>Next</span>
              <FaAngleRight />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UsersTable;
