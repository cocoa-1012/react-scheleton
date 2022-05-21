import React from 'react';

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
export default FilterBar;
