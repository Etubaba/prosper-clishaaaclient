import { useUserStore } from '../../context/userProvider';

const CoinPayment = () => {
  const { admin } = useUserStore();
  return (
    <div className='flex flex-col h-full justify-between my-1 gap-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-[1rem] font-bold text-black'>
          Company Name: {admin.name}
        </p>
        <p className='text-[1rem] font-bold text-black'>
          Company Email: {admin.email}
        </p>
      </div>
    </div>
  );
};

export default CoinPayment;
