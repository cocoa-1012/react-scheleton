import React, { useEffect, useMemo, useState } from 'react';
import FilterBar from './FilterBar';
import Pagination from './Pagination';
import Table from './Table';

const CameraListTable = () => {
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    setCameras(CAMERA_LIST);
    return () => {};
  }, []);

  //   pagination
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  //   count total page
  useEffect(() => {
    setTotalPage(Math.ceil(cameras.length / itemPerPage));
  }, [cameras, itemPerPage]);

  const filterCameras = useMemo(() => {
    const start = itemPerPage * currentPage - itemPerPage;
    const end = itemPerPage * currentPage;
    return cameras.slice(start, end);
  }, [cameras, itemPerPage, currentPage, totalPage]);

  return (
    <div className='col-span-full rounded-sm border border-slate-200 bg-white shadow-lg xl:col-span-8'>
      <div className='p-3'>
        <FilterBar />
        <hr className='my-3' />
        <Table cameras={filterCameras} />
        <hr className='my-3' />
        <Pagination
          itemPerPage={itemPerPage}
          setItemPerPage={setItemPerPage}
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CameraListTable;

const CAMERA_LIST = [
  {
    name: 'Von and Sons',
    status: 'online',
  },
  {
    name: 'Bashirian-Dietrich',
    status: 'offline',
  },
  {
    name: 'Tremblay-Bednar',
    status: 'online',
  },
  {
    name: 'Lynch, Stoltenberg and Rempel',
    status: 'offline',
  },
  {
    name: 'Hane and Sons',
    status: 'offline',
  },
  {
    name: 'Lubowitz-Hansen',
    status: 'online',
  },
  {
    name: 'Zulauf, Blick and Friesen',
    status: 'online',
  },
  {
    name: 'Abernathy-Reilly',
    status: 'offline',
  },
  {
    name: 'Cronin, Deckow and Mitchell',
    status: 'online',
  },
  {
    name: "Kohler, Lynch and O'Reilly",
    status: 'online',
  },
  {
    name: 'Yundt Group',
    status: 'online',
  },
  {
    name: 'Schmeler Inc',
    status: 'offline',
  },
  {
    name: 'Dooley Inc',
    status: 'online',
  },
  {
    name: 'Wyman, Hilll and Harris',
    status: 'online',
  },
  {
    name: "Fay, Stracke and O'Reilly",
    status: 'offline',
  },
  {
    name: 'Schinner-Heller',
    status: 'offline',
  },
  {
    name: 'Reilly-Mayer',
    status: 'offline',
  },
  {
    name: 'Schimmel LLC',
    status: 'offline',
  },
  {
    name: 'Conroy-Witting',
    status: 'offline',
  },
  {
    name: 'Beahan-Gusikowski',
    status: 'offline',
  },
];
