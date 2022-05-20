import React from 'react';
import Icon from '../../../images/icon-01.svg';
const TopCards = () => {
  return (
    <div className='mb-3'>
      <div className='grid grid-cols-12 gap-4'>
        <Card
          title={'Total Clients'}
          subtitle={'+48% From Last 1 year'}
          no='24,780'
          Icon={Icon}
        />
        <Card
          title={'Total Users'}
          subtitle={'+48% From Last 1 year'}
          no='24,780'
          Icon={Icon}
        />
        <Card
          title={'Total Quiz'}
          subtitle={'+48% From Last 1 year'}
          no='24,780'
          Icon={Icon}
        />
        <Card
          title={'Monthly Engagement'}
          subtitle={'+48% From Last 1 year'}
          no='24,780'
          Icon={Icon}
        />
      </div>
    </div>
  );
};

const Card = ({ Icon, title, subtitle, no }) => {
  return (
    <div className='col-span-full flex flex-col rounded border border-slate-200 bg-white p-3 shadow-lg sm:col-span-6 xl:col-span-3'>
      <div className='px-5 pt-5'>
        <div className='mb-2 flex items-start justify-between'>
          <img src={Icon} width='32' height='32' alt='Icon 01' />
        </div>
        <h2 className='mb-2 text-lg font-semibold text-slate-800'>{title}</h2>

        <div className='flex items-start'>
          <div className='mr-2 text-3xl font-bold text-slate-800'>{no}</div>
        </div>
        <div className='mb-1 text-xs font-semibold uppercase text-slate-400'>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default TopCards;
