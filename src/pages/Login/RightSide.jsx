import React, { useState } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const DATABASE_EMAIL = 'test@gmail.com';
const DATABASE_PASSWORD = 'test12345';

const RightSide = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (email === DATABASE_EMAIL && password === DATABASE_PASSWORD) {
      navigate('/dashboard/');
      return;
    }

    toast.error("Email and password didn't matched");
  };
  return (
    <div className='bg-white p-5 md:flex-1'>
      <h3 className='my-4 text-2xl font-semibold text-gray-700'>
        Account Login
      </h3>
      <form onSubmit={submitHandler} className='flex flex-col space-y-5'>
        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='email'
            className='text-sm font-semibold text-gray-500'
          >
            Email address
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autofocus
            className='login-input'
          />
        </div>
        <div className='flex flex-col space-y-1'>
          <div className='flex items-center justify-between'>
            <label
              htmlFor='password'
              className='text-sm font-semibold text-gray-500'
            >
              Password
            </label>
            <a
              href='#'
              className='text-sm text-blue-600 hover:underline focus:text-blue-800'
            >
              Forgot Password?
            </a>
          </div>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            className='login-input'
          />
        </div>
        <div className='flex items-center space-x-2'>
          <input type='checkbox' id='remember' className='login-checkbox' />
          <label
            htmlFor='remember'
            className='text-sm font-semibold text-gray-500'
          >
            Remember me
          </label>
        </div>
        <div>
          <button type='submit' className='login-button'>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

const AccountLogin = () => {
  const buttonCss = `group flex items-center justify-center space-x-2 rounded-md border px-4 py-2 transition-colors duration-300 focus:outline-none`;
  return (
    <div className='flex flex-col space-y-5'>
      <span className='flex items-center justify-center space-x-2'>
        <span className='h-px w-14 bg-gray-400'></span>
        <span className='font-normal text-gray-500'>or login with</span>
        <span className='h-px w-14 bg-gray-400'></span>
      </span>
      <div className='flex flex-col space-y-4'>
        <a
          href='#'
          className={`${buttonCss} border-gray-800 hover:bg-gray-800`}
        >
          <span>
            <FaGithub />
          </span>
          <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
            Github
          </span>
        </a>
        <a
          href='#'
          className={`${buttonCss} border-blue-500  hover:bg-blue-500`}
        >
          <span>
            <FaTwitter />
          </span>
          <span className='text-sm font-medium text-blue-500 group-hover:text-white'>
            Twitter
          </span>
        </a>
      </div>
    </div>
  );
};

export default RightSide;
