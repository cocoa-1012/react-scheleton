import React from 'react';
import UserChart from './UserChart';

const AllCharts = () => {
  return (
    <div className='my-4 grid grid-cols-12 gap-3'>
      <UserChart />
      <UserChart />
      <UserChart />
    </div>
  );
};

export default AllCharts;
