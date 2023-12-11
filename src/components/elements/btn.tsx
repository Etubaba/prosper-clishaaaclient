import { TBtnProps } from '../../types/components';

const Btn = ({ children, isDark, className, ...otherProps }: TBtnProps) => {
  return (
    <button
      className={`${
        isDark ? 'bg-gray-900 text-white' : 'text-black'
      }  rounded-lg sm:py-2 sm:px-4  px-3 py-2 flex justify-center space-x-2  capitalize text-base  font-medium ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Btn;
