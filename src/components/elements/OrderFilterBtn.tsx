type TOrderBtn = {
  placeholder: string;
  iconImg?: JSX.Element;
  activeFilter: string;
  fn: (value: string) => void;
};

const OrderFilterBtn = ({
  placeholder,
  iconImg,
  activeFilter,
  fn,
}: TOrderBtn) => {
  return (
    <div
      style={
        activeFilter === placeholder
          ? { backgroundColor: '#1B4C84', color: '#fff' }
          : { backgroundColor: '#fff', color: '#1B4C84' }
      }
      className={`${
        activeFilter === placeholder && 'active'
      } orderBtn relative bg-blue text-white flex flex-row ${
        iconImg ? 'justify-between' : 'justify-center'
      } items-center p-1 h-[23px] w-[140px] cursor-pointer`}
      onClick={() => {
        fn(placeholder);
      }}
    >
      <p className={`h-fit w-fit ${iconImg ? 'pl-[1.5rem]' : ''}`}>
        {placeholder}
      </p>
      {iconImg && iconImg}
    </div>
  );
};

export default OrderFilterBtn;
