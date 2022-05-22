import debounce from 'lodash.debounce';
import React, { useState } from 'react';
import {
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

const SingleCamera = () => {
  const [image] = useState(
    'https://images.pexels.com/photos/8573839/pexels-photo-8573839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  );

  const cameraUpHandler = debounce(() => {
    toast.success('Camera up');
  }, 1500);
  const cameraDownHandler = debounce(() => {
    toast.success('Camera down');
  }, 1500);
  const cameraLeftHandler = debounce(() => {
    toast.success('Camera left');
  }, 1500);
  const cameraRightHandler = debounce(() => {
    toast.success('Camera right');
  }, 1500);

  return (
    <div className='rounded-lg bg-white p-3 pb-5'>
      <div>
        <div className='h-96 select-none overflow-hidden'>
          <img src={image} alt='' className='h-full w-full object-contain' />
        </div>
        <div className='mt-2 flex items-center justify-center'>
          <div>
            <div className='controller-btn ' onClick={cameraUpHandler}>
              <FaAngleDoubleUp />
            </div>
            <div className='flex'>
              <div className='controller-btn ' onClick={cameraLeftHandler}>
                <FaAngleDoubleLeft />
              </div>
              <div className='controller-btn ' onClick={cameraRightHandler}>
                <FaAngleDoubleRight />
              </div>
            </div>
            <div className='controller-btn ' onClick={cameraDownHandler}>
              <FaAngleDoubleDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCamera;
