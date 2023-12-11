import './elements.css';

type TColorBtn = {
  value: string;
  changeColorFn: (value: { background: string }) => void;
};

const ColorBtn = ({ value, changeColorFn }: TColorBtn) => {
  return (
    <div
      onClick={() => {
        changeColorFn({ background: value });
      }}
      tabIndex={0}
      style={{
        backgroundColor: `${value}`,
      }}
      className={`colorbtn h-[20px] w-[25%] rounded-[3px] bg-[${value}] cursor-pointer transition ease-in-out hover:scale-[1.1] hover:scale-y-[1.4]`}
    ></div>
  );
};

export default ColorBtn;
