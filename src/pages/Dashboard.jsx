import React, { useState } from 'react';
import AllCharts from '../components/Dashobard/Components/Charts/AllCharts';
import TopCards from '../components/Dashobard/Components/TopCards';
import UsersTable from '../components/Dashobard/Table/UsersTable';
import Datepicker from '../components/partials/actions/Datepicker';
import FilterButton from '../components/partials/actions/FilterButton';
import DashboardAvatars from '../components/partials/dashboard/DashboardAvatars';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Dashboard actions */}
      <div className='mb-8 sm:flex sm:items-center sm:justify-between'>
        {/* Left: Avatars */}
        <DashboardAvatars />

        {/* Right: Actions */}
        <div className='grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end'>
          {/* Filter button */}
          <FilterButton />
          {/* Datepicker built with flatpickr */}
          <Datepicker />
          {/* Add view button */}
          <button className='btn bg-indigo-500 text-white hover:bg-indigo-600'>
            <svg
              className='h-4 w-4 shrink-0 fill-current opacity-50'
              viewBox='0 0 16 16'
            >
              <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
            </svg>
            <span className='xs:block ml-2 hidden'>Add view</span>
          </button>
        </div>
      </div>

      <TopCards />
      <AllCharts />
      <UsersTable />
    </>
  );
};

export default Dashboard;
