import { Search } from "lucide-react";
import { Input } from "../../input";
import React from "react";

interface ICustomSearchFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  errorClass?: string;
  className?: string;
}

const CustomSearchField: React.FC<ICustomSearchFieldProps> = ({
  id,
  name,
  type,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  errorClass = "",
  className = "",
}) => {
  return (
    <div className="relative">
      <Search className="absolute top-[50%] -translate-y-[50%] left-3 flex items-center" size={20} />

      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        errorClass={errorClass}
      />
    </div>
  );
};

export default CustomSearchField;
