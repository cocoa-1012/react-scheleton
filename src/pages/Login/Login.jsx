import React from 'react';
import LeftSide from './LeftSide';
import './Login.css';
import RightSide from './RightSide';

const Login = () => {
  return (
    <div className='flex min-h-screen items-center bg-gray-100 p-4 lg:justify-center'>
      <div className='max flex flex-col overflow-hidden rounded-md bg-white shadow-lg md:flex-1 md:flex-row lg:max-w-screen-md'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Login;
