import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllCameras from '../../pages/Cameras/AllCamers';
import Dashboard from '../../pages/Dashboard';
import EventPage from '../../pages/Event/Event';
import SingleCamera from '../../pages/SingleCamera/SingleCamera';
import UploadData from '../../pages/UploadData/UploadData';
import LayoutContainer from '../partials/LayoutContainer';

const DashboardRoutes = () => {
  return (
    <LayoutContainer>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/camera' element={<AllCameras />} />
        <Route path='/camera/:id' element={<SingleCamera />} />
        <Route path='/events' element={<EventPage />} />
        <Route path='/upload-data' element={<UploadData />} />
      </Routes>
    </LayoutContainer>
  );
};

export default DashboardRoutes;
