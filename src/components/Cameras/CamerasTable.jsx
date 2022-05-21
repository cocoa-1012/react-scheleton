import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CameraListTable = () => {
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    setCameras(CAMERA_LIST);
    return () => {};
  }, []);

  return (
    <div className='col-span-full rounded-sm border border-slate-200 bg-white shadow-lg xl:col-span-8'>
      <div className='p-3'>
        <FilterBar />
        <hr className='my-3' />
        <Table cameras={cameras} />
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

const Table = ({ cameras }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='custom-table w-full'>
        {/* Table header */}
        <thead>
          <tr>
            <th>
              <div className='text-left font-semibold'>Name</div>
            </th>
            <th>
              <div className='text-left'>Status</div>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Row */}
          {cameras.map((camera) => (
            <tr key={Math.random()}>
              <td>
                <div className=''>{camera.name}</div>
              </td>
              <td>
                <div
                  className={`${
                    camera.status === 'online' ? 'bg-green-500' : 'bg-red-600'
                  } w-fit px-2 text-white`}
                >
                  {camera.status}
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

export default CameraListTable;

const CAMERA_LIST = [
  {
    name: 'Von and Sons',
    status: 'online',
  },
  {
    name: 'Bashirian-Dietrich',
    status: 'offline',
  },
  {
    name: 'Tremblay-Bednar',
    status: 'online',
  },
  {
    name: 'Lynch, Stoltenberg and Rempel',
    status: 'offline',
  },
  {
    name: 'Hane and Sons',
    status: 'offline',
  },
  {
    name: 'Lubowitz-Hansen',
    status: 'online',
  },
  {
    name: 'Zulauf, Blick and Friesen',
    status: 'online',
  },
  {
    name: 'Abernathy-Reilly',
    status: 'offline',
  },
  {
    name: 'Cronin, Deckow and Mitchell',
    status: 'online',
  },
  {
    name: "Kohler, Lynch and O'Reilly",
    status: 'online',
  },
  {
    name: 'Yundt Group',
    status: 'online',
  },
  {
    name: 'Schmeler Inc',
    status: 'offline',
  },
  {
    name: 'Dooley Inc',
    status: 'online',
  },
  {
    name: 'Wyman, Hilll and Harris',
    status: 'online',
  },
  {
    name: "Fay, Stracke and O'Reilly",
    status: 'offline',
  },
  {
    name: 'Schinner-Heller',
    status: 'offline',
  },
  {
    name: 'Reilly-Mayer',
    status: 'offline',
  },
  {
    name: 'Schimmel LLC',
    status: 'offline',
  },
  {
    name: 'Conroy-Witting',
    status: 'offline',
  },
  {
    name: 'Beahan-Gusikowski',
    status: 'offline',
  },
];
