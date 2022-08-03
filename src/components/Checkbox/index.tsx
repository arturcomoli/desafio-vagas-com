import { ICheckbox } from "./interfaces";

const Checkbox = ({ label, value, error, ...rest }: ICheckbox) => {
  return (
    <label
      htmlFor={value}
      className="flex justify-start gap-2.5 text-sm font-test-font"
    >
      <input
        type="checkbox"
        value={value}
        className={`w-6 h-6 
        ${
          error
            ? "bg-light-err hover:bg-str-err"
            : "bg-btn-blue hover:bg-btn-hover"
        }
         checked:bg-btn-blue checked:focus:bg-btn-blue
        checked:hover:bg-btn-hover cursor-pointer transition-colors duration-300 rounded-sm`}
        {...rest}
      />
      {label}
    </label>
  );
};
export default Checkbox;
