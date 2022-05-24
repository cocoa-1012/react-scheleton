import React from 'react';
import { toast } from 'react-toastify';
const UploadData = () => {
  const showSuccess = () => {
    toast.success('Action Succeeded');
  };
  return (
    <div>
      <div className=''>
        <div>
          <div class='group relative z-0 mb-6 w-full'>
            <label for='message' class='sr-only'>
              Your message
            </label>
            <textarea
              id='message'
              rows='10'
              class='block w-full border-b border-t-0 border-l-0 border-r-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  outline-none focus:outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              placeholder='Your message...'
            />
          </div>
          <button
            type='submit'
            class='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
            onClick={showSuccess}
          >
            Upload data
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadData;
