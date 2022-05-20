import React from 'react';

const LeftSide = () => {
  return (
    <div className='bg-blue-500 p-4 py-6 text-white md:flex md:w-80 md:flex-shrink-0 md:flex-col md:items-center md:justify-evenly'>
      <div className='my-3 text-center text-4xl font-bold tracking-wider'>
        <a href='#'>Cam Manage</a>
      </div>
      <p className='mt-6 text-center font-normal text-gray-300 md:mt-0'>
        A camera is an optical instrument that captures a visual image. At a
        basic level, cameras consist of sealed boxes (the camera body), with a
        small hole
      </p>
      <p className='mt-10 flex flex-col items-center justify-center text-center'>
        <span>Don't have an account?</span>
        <a href='#' className='underline'>
          Get Started!
        </a>
      </p>
    </div>
  );
};

export default LeftSide;
