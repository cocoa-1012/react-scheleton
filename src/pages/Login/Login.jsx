import React from 'react';
import './Login.css';
import RightSide from './RightSide';

const Login = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 p-4'>
      <div className='max sm:max-w-screen-xs flex flex-col overflow-hidden rounded-md bg-white shadow-lg md:flex-1 md:flex-row'>
        <RightSide />
      </div>
    </div>
  );
};

export default Login;
