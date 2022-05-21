import React from 'react';
import { toast } from 'react-toastify';
const EventForm = () => {
  const showSuccess = () => {
    toast.success('Form success');
  };
  const showError = () => {
    toast.error('Form success');
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div class='group relative z-0 mb-6 w-full'>
        <input
          type='email'
          name='floating_email'
          class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
          placeholder=' '
          required=''
        />
        <label
          for='floating_email'
          class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
        >
          Email address
        </label>
      </div>
      <div class='group relative z-0 mb-6 w-full'>
        <input
          type='password'
          name='floating_password'
          id='floating_password'
          class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
          placeholder=' '
          required=''
        />
        <label
          for='floating_password'
          class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
        >
          Password
        </label>
      </div>
      <div class='group relative z-0 mb-6 w-full'>
        <input
          type='password'
          name='repeat_password'
          id='floating_repeat_password'
          class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
          placeholder=' '
          required=''
        />
        <label
          for='floating_repeat_password'
          class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
        >
          Confirm password
        </label>
      </div>
      <div class='grid xl:grid-cols-2 xl:gap-6'>
        <div class='group relative z-0 mb-6 w-full'>
          <input
            type='text'
            name='floating_first_name'
            id='floating_first_name'
            class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            required=''
          />
          <label
            for='floating_first_name'
            class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            First name
          </label>
        </div>
        <div class='group relative z-0 mb-6 w-full'>
          <input
            type='text'
            name='floating_last_name'
            id='floating_last_name'
            class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            required=''
          />
          <label
            for='floating_last_name'
            class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            Last name
          </label>
        </div>
      </div>
      <div class='grid xl:grid-cols-2 xl:gap-6'>
        <div class='group relative z-0 mb-6 w-full'>
          <input
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            name='floating_phone'
            id='floating_phone'
            class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            required=''
          />
          <label
            for='floating_phone'
            class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            Phone number (123-456-7890)
          </label>
        </div>
        <div class='group relative z-0 mb-6 w-full'>
          <input
            type='text'
            name='floating_company'
            id='floating_company'
            class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            required=''
          />
          <label
            for='floating_company'
            class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            Company (Ex. Google)
          </label>
        </div>
      </div>

      <div class='group relative z-0 mb-6 w-full'>
        <label for='message' class='sr-only'>
          Your message
        </label>
        <textarea
          id='message'
          rows='4'
          class='block w-full border-b border-t-0 border-l-0 border-r-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  outline-none focus:outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
          placeholder='Your message...'
        />
      </div>

      <div class='mb-4 flex items-center'>
        <input
          id='checkbox-1'
          type='checkbox'
          value=''
          class='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
        />
        <label
          for='checkbox-1'
          class='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          I agree to the{' '}
          <a href='#' class='text-blue-600 hover:underline dark:text-blue-500'>
            terms and conditions
          </a>
          .
        </label>
      </div>

      <fieldset>
        <legend class='sr-only'>Countries</legend>
        <div class='mb-4 flex items-center'>
          <input
            id='country-option-1'
            type='radio'
            name='countries'
            value='USA'
            class='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600'
          />
          <label
            for='country-option-1'
            class='ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            United States
          </label>
        </div>
        <div class='mb-4 flex items-center'>
          <input
            id='country-option-2'
            type='radio'
            name='countries'
            value='Germany'
            class='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600'
          />
          <label
            for='country-option-2'
            class='ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Germany
          </label>
        </div>
        <div class='mb-4 flex items-center'>
          <input
            id='country-option-3'
            type='radio'
            name='countries'
            value='Spain'
            class='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-600'
          />
          <label
            for='country-option-3'
            class='ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Spain
          </label>
        </div>
        <div class='mb-4 flex items-center'>
          <input
            id='country-option-4'
            type='radio'
            name='countries'
            value='United Kingdom'
            class='focus:ring:blue-300 dark:focus-ring-blue-600 h-4 w-4 border-gray-300 focus:ring-2 dark:border-gray-600 dark:bg-gray-700'
          />
          <label
            for='country-option-4'
            class='ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            United Kingdom
          </label>
        </div>
        <div class='flex items-center'>
          <input
            id='option-disabled'
            type='radio'
            name='countries'
            value='China'
            class='h-4 w-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-600'
            disabled=''
          />
          <label
            for='option-disabled'
            class='ml-2 block text-sm font-medium text-gray-300 dark:text-gray-700'
          >
            China (disabled)
          </label>
        </div>
      </fieldset>

      <div>
        <label
          for='checked-toggle'
          class='relative mb-4 inline-flex cursor-pointer items-center'
        >
          <input
            type='checkbox'
            value=''
            id='checked-toggle'
            class='peer sr-only'
          />
          <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          <span class='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Checked toggle
          </span>
        </label>
      </div>

      <button
        type='submit'
        class='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
        onClick={showSuccess}
      >
        Submit for Success
      </button>
      <button
        type='submit'
        onClick={showError}
        class='ml-2 w-full rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 sm:w-auto'
      >
        Submit for Error
      </button>
    </form>
  );
};

export default EventForm;
