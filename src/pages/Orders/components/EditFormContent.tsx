import { Button, Form, Input } from 'antd';
import { singletaskData } from '../../../types/app.types';
import { useDataStore } from '../../../context/dataProvider';
import { useState } from 'react';
import useRequestManager from '../../../manager/requestManger';
import { rules } from '../../../utils/rules';

const EditFormContent = ({
  data,
  updateTaskData,
}: {
  data: singletaskData;
  updateTaskData: (data: singletaskData, value: any) => void;
}) => {
  const { setData } = useDataStore();
  const { updateTask } = useRequestManager();
  const [loading, setIsloading] = useState<boolean>(false);
  // console.log(data);
  const closeModal = () => {
    setData({
      type: 'toggleModal',
      payload: false,
    });
  };
  const searchVal: any = JSON.parse(data.google_search);
  const update = async (vallue: any) => {
    setIsloading(true);
    let sentdata = {};
    if (searchVal) {
      searchVal.search_phrase = vallue.search_phrase;
      sentdata = {
        google_search: JSON.stringify(searchVal),
        url: vallue.url,
      };
    } else {
      sentdata = {
        url: vallue.url,
        website_click: {
          duration: vallue.duration,
          duration_to: data.website_click?.duration_to,
        },
      };
    }
    const updatedTaskData = await updateTask(data.id, sentdata);
    if (updatedTaskData.status) {
      updateTaskData(data, sentdata);
    }
    setIsloading(false);
  };
  return (
    <div className='vist_form'>
      <Form
        name='complex-form'
        layout='vertical'
        className=' w-full'
        requiredMark={false}
        onFinish={update}
      >
        <div className='mb-3'>
          <Form.Item
            label='Url'
            name='url'
            initialValue={data.url}
            className='!text-blue_color  '
            rules={[{ required: true, message: '' }]}
          >
            <Input
              placeholder='Please input'
              className='w-full inline-block '
            />
          </Form.Item>
        </div>
        {data.type.toLowerCase().includes('website click') && (
          <div className='mb-3'>
            <Form.Item
              label='Duration in Days'
              name='duration'
              className='!text-blue_color !m-0  mb-3 ms-0 '
              rules={rules.onlyNumberCharacters}
              initialValue={data.website_click?.duration}
            >
              <Input
                placeholder='Please input'
                className='w-full inline-block '
              />
            </Form.Item>
          </div>
        )}
        {data.type.toLowerCase().includes('search') && (
          <div className='mb-3'>
            <Form.Item
              label='Keyword or Keyphrase'
              name='search_phrase'
              className='!text-blue_color !m-0  mb-3 ms-0 '
              rules={[{ required: true, message: '' }]}
              initialValue={searchVal.search_phrase}
            >
              <Input
                placeholder='Please input'
                className='w-full inline-block '
              />
            </Form.Item>
          </div>
        )}
        <div className='flex space-x-3 justify-end mt-3'>
          <Button
            type='primary'
            htmlType='button'
            onClick={() => closeModal()}
            className=' !text-black  px-4 py-1 bg-white rounded-[5px]  text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9]   font-bold hover:!bg-slate-50 '
          >
            cancel
          </Button>
          <Button
            loading={loading}
            type='primary'
            htmlType='submit'
            // onClick={() => handleOpenChange(true)}
            className='updatebtn invoice_download_btn px-4 py-1 bg-green rounded-[5px]  text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9]   text-white font-bold'
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default EditFormContent;
