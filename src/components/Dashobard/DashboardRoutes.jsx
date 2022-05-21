import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllCameras from '../../pages/Cameras/AllCamers';
import Dashboard from '../../pages/Dashboard';
import LayoutContainer from '../partials/LayoutContainer';

const DashboardRoutes = () => {
  return (
    <LayoutContainer>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/cameras' element={<AllCameras />} />
      </Routes>
    </LayoutContainer>
  );
};

export default DashboardRoutes;
