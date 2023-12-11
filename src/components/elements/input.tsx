import { TInputProps } from '../../types/components';

const InputElement = ({
  label,

  className,
  ...otherProps
}: TInputProps) => {
  return (
    <div>
      <label className=' block mb-1'>{label}</label>

      <input
        {...otherProps}
        className={`rounded-md focus:outline-none text-black p-2 inline-block  ${className}`}
      />
    </div>
  );
};

export default InputElement;
