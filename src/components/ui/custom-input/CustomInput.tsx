import { ICustomInput } from "@/types/form.interface";
import { Eye, EyeOff, Search } from "lucide-react";
import { useState } from "react";
import { FieldError } from "react-hook-form";

interface ICustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fieldData: ICustomInput;
  fieldValue: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: FieldError;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

function CustomInput({
  className,
  fieldData,
  fieldValue,
  onChange,
  onBlur,
  error,
  onKeyDown,
  ...props
}: ICustomInputProps): JSX.Element {
  const { id, name, label, placeholder, type } = fieldData;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      {label && (
        <label className="block text-black mb-2" htmlFor={id}>
          {label}
        </label>
      )}

      <div className="relative">
        {type === "search" && (
          <Search
            className="absolute top-[50%] -translate-y-[50%] left-3 flex items-center"
            size={20}
          />
        )}

        <input
          className={`${className} w-full bg-white border border-gray-300 rounded-xl px-3 py-2 
          ${type === "password" ? "pr-10 !important" : ""} 
          ${type === "search" ? "pl-10 !important" : ""} 
          ${error ? "border-red-500" : ""}`}
          id={id}
          name={name}
          type={type === "password" && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          value={fieldValue}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-c-dark-gray"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && <p className="text-red-500 mt-1">{error.message}</p>}
    </div>
  );
}

export default CustomInput;
