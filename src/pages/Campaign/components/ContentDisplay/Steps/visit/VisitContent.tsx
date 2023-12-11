import ClishaCard from '../../../../../../components/elements/ClishaCard';

const VisitContent = () => {
  return (
    <div className='text-white'>
      <ClishaCard>
        <div className='px-2 text-white text-center'>
          <div className='flex space-x-4 font-medium  justify-center text-xl'>
            <span>Step </span>
            <span>1</span>
            <span> 2</span>
          </div>
          <p className=' font-medium text-[16px] mb-2 mt-1 '>
            Great's Let's go
          </p>
          <p className='mb-2 '>
            Please Read the question below. You will find the answer on this
            page! For answering it, click on the button in the bottom right
            corner.
          </p>
          <p className=' my-3 text-[16px] text-center font-medium'>
            {' '}
            Was sindi die Vortelle Von Gold?
          </p>
          <ul className=' list-disc text-left ps-5'>
            <li>unabhanging, sicher, endich *</li>
            <li>ait, schwer, unsicher</li>
            <li>heiss, schon, geib</li>
          </ul>
        </div>
      </ClishaCard>
    </div>
  );
};

export default VisitContent;
