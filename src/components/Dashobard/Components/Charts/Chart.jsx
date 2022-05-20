import React from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
import LineChart01 from '../../../Dashobard/charts/LineChart01';

const Chart = ({ chartData }) => {
  return (
    <div className='col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg sm:col-span-6 xl:col-span-4'>
      <div className='px-5 pt-5'>
        <h2 className='mb-2 text-lg font-semibold text-slate-800'>Users</h2>

        <div className='flex justify-around text-center'>
          <div>
            <FaArrowAltCircleUp className='text-green-400' />
            <p>13,685</p>
            <p>OverAll</p>
          </div>
          <div>
            <FaArrowAltCircleDown className='text-red-400' />
            <p>13,685</p>
            <p>OverAll</p>
          </div>
          <div>
            <FaArrowAltCircleUp className='text-green-400' />
            <p>13,685</p>
            <p>OverAll</p>
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {/* Change the height attribute to adjust the chart height */}
        <LineChart01 data={chartData} width={389} height={128} />
      </div>
    </div>
  );
};

export default Chart;
