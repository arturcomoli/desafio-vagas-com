import { IButtonProps } from "./interfaces";

const Button = ({ children, square, disabled, ...rest }: IButtonProps) => {
  return (
    <button
      className={`form-button  border-2
      ${square ? "w-11 text-2xl" : "w-24 text-lg py-1"} rounded-md 
      ${
        disabled
          ? "bg-disabled-bg text-grey-txt border-grey-txt"
          : "bg-btn-blue text-white border-transparent"
      }
      outline-offset-4 outline-2 outline-[#2563eb] ring-[#2563eb]
      focus:ring-inset focus:ring-offset-2 focus: ring-offset-[#2563eb]
      focus:ring-[#2563eb] transition-colors duration-300 
      ${!disabled && "hover:bg-btn-hover hover:border-btn-blue"} `}
      {...rest}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
