import { Eye, EyeOff } from "lucide-react";
import { Input } from "../../input";
import React, { useState } from "react";

interface ICustomPasswordFieldProps {
  id: string;
  name: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  errorClass?: string;
  className?: string;
}

const CustomPasswordField: React.FC<ICustomPasswordFieldProps> = ({
  id,
  name,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  errorClass = "",
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        errorClass={errorClass}
      />

      <button
        type="button"
        onClick={handleTogglePassword}
        className="absolute inset-y-0 right-3 flex items-center"
      >
        {showPassword ? (
          <EyeOff size={24} className="text-gray-500" />
        ) : (
          <Eye size={24} className="text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default CustomPasswordField;
