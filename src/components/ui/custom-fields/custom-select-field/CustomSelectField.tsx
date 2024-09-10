import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import React from "react";

interface ICustomSelectFieldProps {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  options: { value: string; label: string }[];
  required: boolean;
  errorClass?: string;
  onValueChange: (value: string) => void;
}

const CustomSelectField: React.FC<ICustomSelectFieldProps> = ({
  id,
  name,
  value,
  placeholder,
  options,
  required,
  errorClass = "",
  onValueChange,
}) => {
  return (
    <Select value={value} onValueChange={onValueChange} required={required}>
      <SelectTrigger
        className={`bg-white h-12 rounded-md text-md font-medium ${errorClass}`}
        id={id}
        name={name}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelectField;
