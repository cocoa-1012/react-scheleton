import React, { useState } from 'react';
import {
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
} from 'react-icons/fa';

const SingleCamera = () => {
  const [image] = useState(
    'https://images.pexels.com/photos/8573839/pexels-photo-8573839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  );
  return (
    <div className='rounded-lg bg-white p-3 pb-5'>
      <div>
        <div className='h-96 overflow-hidden'>
          <img src={image} alt='' className='h-full w-full object-contain' />
        </div>
        <div className='mt-2 flex items-center justify-center'>
          <div>
            <div className='controller-btn '>
              <FaAngleDoubleUp />
            </div>
            <div className='flex'>
              <div className='controller-btn '>
                <FaAngleDoubleLeft />
              </div>
              <div className='controller-btn '>
                <FaAngleDoubleRight />
              </div>
            </div>
            <div className='controller-btn '>
              <FaAngleDoubleDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCamera;
