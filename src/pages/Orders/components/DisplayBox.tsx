const DisplayBox = ({
  label,
  value,
  isRed,
  isGreen,
}: {
  label: string;
  value: string | string[] | number;
  isRed?: boolean;
  isGreen?: boolean;
}) => {
  return (
    <div className='flex flex-col font-light space-y-1  w-full'>
      <span className=' text-blue text-[14px]'>{label}</span>
      <span
        className={`
         ${isRed ? 'text-red' : null} 
         ${isGreen ? ' text-green' : null} 
         inline-block py-2 px-3 bg-white rounded text-[12px] `}
      >
        {value ? value : '-'}
      </span>
    </div>
  );
};

export default DisplayBox;
