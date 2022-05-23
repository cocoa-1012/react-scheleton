import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ cameras }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='custom-table w-full'>
        {/* Table header */}
        <thead>
          <tr>
            <th>
              <div className='text-left font-semibold'>Name</div>
            </th>
            <th>
              <div className='text-left'>Status</div>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Row */}
          {cameras.map((camera) => (
            <tr key={Math.random()}>
              <td className='w-3/4'>
                {camera.status === 'online' ? (
                  <Link
                    to={`/dashboard/camera/${camera.name}`}
                    className='cursor-pointer'
                  >
                    {camera.name}
                  </Link>
                ) : (
                  <p
                    to={`/dashboard/camera/${camera.name}`}
                    className='cursor-not-allowed text-red-600'
                  >
                    {camera.name}
                  </p>
                )}
              </td>
              <td>
                <div
                  className={`${
                    camera.status === 'online' ? 'bg-green-500' : 'bg-red-600'
                  } w-fit text-white`}
                >
                  <span className='px-2'>{camera.status}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
