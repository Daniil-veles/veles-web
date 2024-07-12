// import styles from "./FormField.module.scss";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormMessage } from "../form";
import FormInput from "../input/FormInput";
import React from "react";

interface IFormFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  validation?: RegisterOptions;
}

const FormField: React.FC<IFormFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  validation,
}) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required, ...validation }}
        render={({ field, fieldState: { error } }) => (
          <FormItem>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <FormInput
              id={id}
              name={name}
              placeholder={placeholder}
              type={type}
              required={required}
              validation={validation}
            />
            {error && <FormMessage>{error.message}</FormMessage>}
          </FormItem>
        )}
      />
    </>
  );
};

export default FormField;
