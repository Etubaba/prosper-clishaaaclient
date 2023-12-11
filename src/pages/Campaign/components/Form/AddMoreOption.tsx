import { Form, Input } from 'antd';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const AddMoreOptionFrom = ({
  handleNumber,
}: {
  handleNumber: (value: string) => void;
}) => {
  const [optionArray, setOptionArray] = useState<number[]>([]);

  const handleOptionArray = (value: string | number) => {
    if (typeof value === 'number') {
      setOptionArray([...optionArray, value]);
    } else {
      // const newValue : number[]= optionArray.pop()
      setOptionArray((state) =>
        state.filter((value) => value !== optionArray[optionArray.length - 1])
      );
    }
  };
  return (
    <div>
      {optionArray.map((_, i) => (
        <div key={i + Date.now()} className=' flex flex-col  relative'>
          <div className=' relative '>
            <Form.Item
              name={`options_${i + 4}`}
              label={`Option ${i + 4}`}
              className='p-0 mt-3'
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
          </div>

          <MinusCircleOutlined
            className=' text-red text-xl absolute top-[75%]   right-[-3rem] translate-x-[-50%]  translate-y-[-50%] '
            onClick={() => {
              handleNumber('remove');
              handleOptionArray('remove');
            }}
          />
        </div>
      ))}

      <Form.Item className=' absolute w-full'>
        <span
          className={`border bg-blue_color text-white   absolute ${
            optionArray.length
              ? 'top-[-2.2rem] right-[-5rem]'
              : 'top-[-2.9rem] right-[-2.8rem]'
          }  h-8 w-8 flex justify-center items-center rounded-full`}
        >
          <PlusOutlined
            className='  '
            onClick={() => {
              handleNumber('add');
              handleOptionArray(optionArray.length + 1);
            }}
          />
        </span>
      </Form.Item>
    </div>
  );
};

export default AddMoreOptionFrom;
