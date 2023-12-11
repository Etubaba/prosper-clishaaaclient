import { useState } from 'react';
import {
  BlackEyeSvg,
  BluePenSvg,
  CancelSvg,
  GoldCopySvg,
  PauseSvg,
} from '../../assets/svg/svg';
import { useDataStore } from '../../context/dataProvider';
import useRequestManager from '../../manager/requestManger';
import { singletaskData } from '../../types/app.types';

import './Table.css';
import Spinner from '../elements/Spiner';

type TOrderTableTr = {
  data: singletaskData;
  index: number;
  actions: boolean;
  gotoSingleOrder: (vallue: boolean) => void;
};

const addCommasToCountries = (countriesArray: string[] | string): string => {
  let finalString = '';

  if (typeof countriesArray === 'object') {
    for (let i = 0; i < countriesArray.length; i++) {
      if (countriesArray.length === i + 1) {
        finalString += countriesArray[i];
      } else {
        finalString += countriesArray[i] + `, `;
      }
    }
  } else {
    finalString += countriesArray;
  }
  return finalString;
};

const OrderTableTr = ({
  data,
  index,
  actions,
  gotoSingleOrder,
}: TOrderTableTr) => {
  const { setData } = useDataStore();
  const { updateTask } = useRequestManager();
  const [getData, setGetData] = useState<singletaskData>(data);
  const [loading, setLoading] = useState<boolean>(false);

  const setSingleTaskData = (data: singletaskData | null) => {
    gotoSingleOrder(true);
    setData({
      type: 'setSingleTaskData',
      payload: data,
    });
  };

  const oenModal = () => {
    setData({
      type: 'toggleModal',
      payload: true,
    });
  };
  const updateTaskPause = async (id: number, value: any) => {
    const key = Object.keys(value)[0] as keyof singletaskData;
    const val = value[key];
    const existValue = getData[key];
    if (val === existValue) {
      return;
    }
    setLoading(true);

    const updatedTaskData = await updateTask(id, value);
    if (updatedTaskData.status) {
      const update = { ...data, ...value };
      setGetData(() => update);
    }
    setLoading(false);
  };
  const openModalandSendData = (data: singletaskData | null) => {
    oenModal();
  };
  return (
    <tr>
      <td>
        <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
          {index + 1}
        </p>
      </td>
      {/* <td className="p-[0.5rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">{data.id}</td> */}
      {getData.order_id && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.order_id}
          </p>
        </td>
      )}
      {getData.created_at && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.created_at}
          </p>
        </td>
      )}
      {getData.done_at && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.done_at}
          </p>
        </td>
      )}
      {getData.type && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.type === 'website click' ? 'visit' : 'search'}
          </p>
        </td>
      )}
      {getData.interaction && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.interaction}
          </p>
        </td>
      )}
      {getData.country && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {addCommasToCountries(getData.country)}
          </p>
        </td>
      )}
      {getData.url && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.url.substring(0, 40)}
          </p>
        </td>
      )}
      {getData.keyword && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.keyword}
          </p>
        </td>
      )}
      {getData.status_a && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            -
          </p>
        </td>
      )}
      {getData.status_percentage && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.status_percentage}
          </p>
        </td>
      )}
      {getData.auto_renew && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.auto_renew === 'no' ? (
              <span className=' text-red'>not activated</span>
            ) : (
              <span className=' text-green_color'>activated</span>
            )}
          </p>
        </td>
      )}
      {getData.success && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.success}
          </p>
        </td>
      )}
      {getData.ip_address && (
        <td>
          <p className='p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]'>
            {getData.ip_address}
          </p>
        </td>
      )}
      {actions && (
        <td>
          <div className=' tableRowActions space-x-1 flex flex-row justify-between items-center p-[0.5rem] min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px]'>
            {loading ? (
              <div className='text-center'>
                <Spinner />
              </div>
            ) : !getData.status ? (
              <>
                <span>
                  <GoldCopySvg fill='#a6a6a6' />
                </span>

                <span>
                  <PauseSvg fill='#a6a6a6' />
                </span>
                <span>
                  <CancelSvg fill='#a6a6a6' />
                </span>
              </>
            ) : (
              <>
                <span
                  onClick={() =>
                    updateTaskPause(getData.id, { published: true })
                  }
                >
                  <GoldCopySvg
                    fill={getData.published ? '#a6a6a6' : undefined}
                  />
                </span>
                <span
                  onClick={() =>
                    updateTaskPause(getData.id, { published: false })
                  }
                >
                  <PauseSvg fill={!getData.published ? '#a6a6a6' : '#39A54A'} />
                </span>
                <span
                  onClick={() => updateTaskPause(getData.id, { status: 0 })}
                >
                  <CancelSvg fill={getData.status ? '#EE2C4C' : '#a6a6a6'} />
                </span>
              </>
            )}

            <span onClick={() => openModalandSendData(data)}>
              <BluePenSvg />
            </span>
            <span onClick={() => setSingleTaskData(data)}>
              <BlackEyeSvg />
            </span>
          </div>
        </td>
      )}
    </tr>
  );
};

export default OrderTableTr;
