import { InputHTMLAttributes } from "react";

interface ILoginInput extends InputHTMLAttributes<HTMLInputElement> {}

const LoginInput = ({ className, ...props }: ILoginInput) => {
  return (
    <div className="w-full relative logininputcon h-[15%]">
      <input
        className={`${className} logininput w-full h-full bg-transparent border-[2px] border-orange rounded-[5px] p-[3%] px-[4%] text-white`}
        {...props}
      />
      {props.type === "password" && (
        <>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="viewPass absolute right-[10px] top-0 bottom-0 m-auto"
          >
            <path
              d="M11 2.45557C14.79 2.45557 18.17 4.58557 19.82 7.95557C18.17 11.3256 14.79 13.4556 11 13.4556C7.21 13.4556 3.83 11.3256 2.18 7.95557C3.83 4.58557 7.21 2.45557 11 2.45557ZM11 0.455566C6 0.455566 1.73 3.56557 0 7.95557C1.73 12.3456 6 15.4556 11 15.4556C16 15.4556 20.27 12.3456 22 7.95557C20.27 3.56557 16 0.455566 11 0.455566ZM11 5.45557C12.38 5.45557 13.5 6.57557 13.5 7.95557C13.5 9.33557 12.38 10.4556 11 10.4556C9.62 10.4556 8.5 9.33557 8.5 7.95557C8.5 6.57557 9.62 5.45557 11 5.45557ZM11 3.45557C8.52 3.45557 6.5 5.47557 6.5 7.95557C6.5 10.4356 8.52 12.4556 11 12.4556C13.48 12.4556 15.5 10.4356 15.5 7.95557C15.5 5.47557 13.48 3.45557 11 3.45557Z"
              fill="white"
            />
          </svg>
        </>
      )}
    </div>
  );
};

export default LoginInput;
