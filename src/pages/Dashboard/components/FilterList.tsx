import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { FiInfo } from 'react-icons/fi';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  // console.log(date, dateString);
};

const FilterList = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <span className='font-bol font-extrabold text-slate-300'>
          Filter by Data :
        </span>
        <div className='flex items-center'>
          <div className='flex bg-white  rounded-md space-x-4 items-center py-2 px-3 ms-8'>
            <span className='inline-block bg-[#77EC3F] w-6 h-1'></span>
            <span className='  font-bold'>Total Target Group</span>
          </div>
        </div>

        <div className='flex bg-white  rounded-md space-x-4 items-center py-2 px-3 ms-8'>
          <span className='inline-block bg-[#19ACFF] w-6 h-1'></span>
          <span className='  font-bold'>Active Member </span>
        </div>

        <div className='flex bg-white  rounded-md space-x-4 items-center py-2 px-3 ms-8'>
          <span className='inline-block bg-[#DF19FF] w-6 h-1'></span>
          <span className='  font-bold'>Average Engagement </span>
        </div>
      </div>
      <div className='flex'>
        <div className='flex items-center'>
          <span className='font-bol font-extrabold me-4'>Search by Date :</span>
          <DatePicker prevIcon={<FiInfo />} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default FilterList;
