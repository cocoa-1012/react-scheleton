import debounce from 'lodash.debounce';
import React, { useMemo, useState } from 'react';
import {
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Breadcrumb from '../../components/Dashobard/Breadcrumb';

const SingleCamera = () => {
  const [image] = useState(
    'https://images.pexels.com/photos/8573839/pexels-photo-8573839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  );

  const { id } = useParams();

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
  const breadcrumb = useMemo(
    () => [
      {
        text: 'IP Cameras',
        url: '/dashboard/camera',
      },
      {
        text: `${id}`,
        url: `/dashboard/camera/${id}`,
      },
    ],
    [id]
  );

  const refreshCamera = () => {
    toast.success('camera refresh');
  };
  return (
    <div>
      <Breadcrumb breadcrumb={breadcrumb || []} />
      <div className='rounded-lg bg-white p-3 pb-5'>
        <button
          onClick={refreshCamera}
          type='submit'
          class='w-full rounded-sm bg-indigo-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 sm:w-auto'
        >
          Refresh
        </button>
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
    </div>
  );
};

export default SingleCamera;
