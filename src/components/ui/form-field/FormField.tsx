import { Controller, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormMessage } from "../form";
import { Input } from "../input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import CustomPhoneInput from "../custom-phone-input/CustomPhoneInput";
import { ComponentFormEnum, IFormField } from "@/types/types.interface";
import React from "react";

interface IFormFieldProps {
  value: IFormField;
  onValueChange?: (value: any) => void;
}

const FormFieldComponent: React.FC<IFormFieldProps> = ({
  value,
  onValueChange,
}) => {
  const { control } = useFormContext();

  const renderComponent = (field: any, error: boolean) => {
    const errorClass = error ? "border-red-500" : "border-gray-300"; // Класс ошибки или нормальный класс

    switch (value.componentType) {
      case ComponentFormEnum.INPUT:
        return (
          <Input
            id={value.id}
            name={value.name}
            type={value.type}
            placeholder={value.placeholder}
            required={value.required}
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            className={errorClass}
          />
        );
      case ComponentFormEnum.SELECT:
        return (
          <Select
            value={field.value || ""}
            defaultValue={field.defaultValue}
            onValueChange={(value) => {
              field.onChange(value);
              if (onValueChange) onValueChange(value);
            }}
            required={value.required}
          >
            <SelectTrigger
              className={`bg-white h-12 rounded-md text-md font-medium ${errorClass}`}
              id={value.id}
              name={value.name}
            >
              <SelectValue placeholder={value.placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {value.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case ComponentFormEnum.PHONE:
        return (
          <CustomPhoneInput
            {...field}
            value={field.value}
            onChange={field.onChange}
            country={value.country ?? ""}
            onlyCountries={value.onlyCountries ?? []}
            required={value.required ?? false}
            placeholder={value.placeholder ?? ""}
            className={errorClass}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Controller
      name={value.name}
      control={control}
      rules={{ required: value.required, ...value.validation }}
      render={({ field, fieldState: { error } }) => (
        <FormItem className="">
          {value.label ? (
            <FormLabel className="inline-block text-md mb-1" htmlFor={value.id}>
              {value.label}
            </FormLabel>
          ) : null}
          {renderComponent(field, !!error)}
          {error && (
            <FormMessage className="text-red-500 mt-1">
              {error.message}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

const FormField = React.memo(FormFieldComponent);

export default FormField;
