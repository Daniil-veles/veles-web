import React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { Input } from "../input";

export interface IInputProps {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  validation?: RegisterOptions;
}

const FormInput: React.FC<IInputProps> = ({
  id,
  name,
  placeholder,
  type = "text",
  required = false,
  validation,
}) => {
  const { register } = useFormContext();

  return (
    <Input
      {...register(name, { required, ...validation })}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default FormInput;
