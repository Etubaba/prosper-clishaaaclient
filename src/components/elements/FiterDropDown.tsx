import { Dropdown } from 'antd';
import { ReactNode } from 'react';

type TOrderBtn = {
  placeholder: string;
  iconImg: ReactNode;
  activeFilter?: string;
  fn: (value: string, type?: string) => void;
};

const FilterDropdown = ({
  placeholder,
  iconImg,
  activeFilter,
  fn,
}: TOrderBtn) => {
  const items = [
    {
      key: '1',
      label: (
        <span
          onClick={() => {
            fn('visit', 'dropdown');
          }}
          className=' inline-block  w-full'
        >
          visit
        </span>
      ),
    },
    {
      key: '2',
      label: (
        <span
          onClick={() => {
            fn('search', 'dropdown');
          }}
          className=' inline-block  w-full'
        >
          Search
        </span>
      ),
    },
    {
      key: '3',
      label: (
        <span
          onClick={() => {
            fn('all', 'dropdown');
          }}
          className=' inline-block  w-full'
        >
          all
        </span>
      ),
    },
  ];

  return (
    <div
      style={
        activeFilter === placeholder
          ? { backgroundColor: '#1B4C84', color: '#fff' }
          : { backgroundColor: '#fff', color: '#1B4C84' }
      }
      className={`${
        activeFilter === placeholder && 'active'
      } orderBtn Drop relative bg-blue text-white w-[140px] cursor-pointer flex flex-row items-center p-1`}
    >
      <Dropdown
        menu={{
          items,
        }}
        placement='bottom'
        className={`w-full h-full flex flex-row ${
          iconImg ? 'justify-between' : 'justify-center'
        } items-center`}
      >
        <p className={`h-fit w-fit ${iconImg ? 'pl-[1.5rem]' : ''}`}>
          {placeholder}
        </p>
      </Dropdown>
      {iconImg}
    </div>
  );
};

export default FilterDropdown;
