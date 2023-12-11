import { ReactNode } from 'react';
import clisha_img from '../../assets/img/clisha_img.png';
import rocket from '../../assets/img/rocket.png';

const ClishaCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className='clishq_card py-8 px-2 rounded-md  w-[300px]'>
      <div className='flex justify-center  rounded-md text-center flex-col items-center space-y-4'>
        <img src={clisha_img} alt='' className='w-30' />
        <img src={rocket} alt='' className='h-36' />
      </div>
      <div className=''>{children}</div>
    </div>
  );
};

export default ClishaCard;
