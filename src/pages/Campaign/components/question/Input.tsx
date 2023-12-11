import React, { useState } from "react";
import { InputProps } from "../../../../types/components";

const Input = ({
  type,
  style,
  value,
  onChange,
  placeholder,
  error,
  defaultValue,
}: InputProps) => {
  const [outline, setOutline] = useState(false);
  return (
    <div
      className={`w-full px-2 bg-white rounded-md py-1.5 border ${
        outline
          ? " border-[#4096FF] "
          : error
          ? "border-red"
          : "border-[#D9D9D9] "
      }   `}
    >
      <input
        className={`placeholder:text-xs ${
          style !== undefined ? style : ""
        }    w-full px-3 py-[3px] bg-white rounded-[5px] text-black text-[0.8rem]  outline-none`}
        type={type}
        defaultValue={defaultValue}
        onBlur={() => {
          setOutline(false);
        }}
        onFocus={() => {
          setOutline(true);
        }}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
