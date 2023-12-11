import OrderTableTr from './OrderTableTr';
import './Table.css';
import { NoDataSvg } from '../../assets/svg/svg';
import SkelTr from './SkelTr';
import { singletaskData } from '../../types/app.types';

type TTable = {
  headers: {
    title: string;
  }[];
  data: singletaskData[] | null;
  actions: boolean;
  gotoSingleOrder: (valueType: boolean) => void;
};

const skel = [1, 2, 3, 4, 5, 6];

const Table = ({ headers, data, actions, gotoSingleOrder }: TTable) => {
  return (
    <>
      <div className='tableCom w-full overflow-x-auto'>
        <table className='w-full '>
          <thead className=''>
            <tr className=''>
              {headers.map((obj) => {
                return (
                  <th
                    key={obj.title}
                    className='text-left text-blue text-[12px] 2xl:text-[16px] font-normal leading-loose'
                  >
                    {obj.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data === null &&
              skel.map((_, i) => {
                return <SkelTr key={i} headers={headers} />;
              })}
            {data?.map((datum, i) => {
              return (
                <OrderTableTr
                  gotoSingleOrder={gotoSingleOrder}
                  data={datum}
                  index={i}
                  actions={actions}
                  key={i}
                />
              );
            })}
            {data?.length === 0 && (
              <tr>
                <td className='  w-full text-center ' colSpan={10}>
                  <div className='flex  justify-center pt-4 border flex-col items-center'>
                    <NoDataSvg />
                    <span>no data</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
