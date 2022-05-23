import React, { useState } from 'react';
import AllCharts from '../components/Dashobard/Components/Charts/AllCharts';
import TopCards from '../components/Dashobard/Components/TopCards';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <TopCards />
      <AllCharts />
    </>
  );
};

export default Dashboard;
