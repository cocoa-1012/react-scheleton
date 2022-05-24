import React from 'react';
import CameraListTable from '../../components/Cameras/CamerasTable';
import BreadCrump from '../../components/Dashobard/Breadcrumb';

const AllCameras = () => {
  const breadcrumb = [
    {
      text: 'IP Cameras',
      url: '/dashboard/camera',
    },
  ];
  return (
    <div>
      <BreadCrump breadcrumb={breadcrumb} />
      <CameraListTable />
    </div>
  );
};

export default AllCameras;
