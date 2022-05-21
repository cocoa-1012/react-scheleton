import React from 'react';
import { toast } from 'react-toastify';
const UploadData = () => {
  const showSuccess = () => {
    toast.success('Action Succeeded');
  };
  return (
    <div>
      <div className='flex h-screen items-center justify-center'>
        <button
          type='submit'
          class='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
          onClick={showSuccess}
        >
          Upload data
        </button>
      </div>
    </div>
  );
};

export default UploadData;
