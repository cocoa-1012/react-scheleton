import React from 'react';
import { toast } from 'react-toastify';

const FilterBar = () => {
  const refreshCamera = () => {
    toast.success('camera refresh');
  };
  return (
    <div className='mb-3 flex items-center justify-between'>
      <button
        type='button'
        onClick={refreshCamera}
        class='w-full rounded-sm bg-indigo-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 sm:w-auto'
      >
        Refresh
      </button>
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
export default FilterBar;
