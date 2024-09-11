import { Controller, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormMessage } from "../form";
import { Input } from "../input";
import React from "react";
import { ComponentFormEnum, IFormField } from "@/types/form.interface";
import CustomPasswordField from "../custom-fields/custom-password-field/CustomPasswordField";
import CustomSelectField from "../custom-fields/custom-select-field/CustomSelectField";
import CustomPhoneField from "../custom-fields/custom-phone-field/CustomPhoneField";
import CustomSearchField from "../custom-fields/custom-search-field/CustomSearchField";

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
    const errorClass = error ? "border-red-500" : "border-gray-300";

    switch (value.componentType) {
      case ComponentFormEnum.INPUT:
        return value.type === "password" ? (
          <CustomPasswordField
            id={value.id}
            name={value.name}
            placeholder={value.placeholder || ""}
            required={value.required || false}
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            errorClass={errorClass}
            className={`${value.className}` || ""}
          />
        ) : value.type === "search" ? (
          <CustomSearchField
            id={value.id}
            name={value.name}
            type={value.type}
            placeholder={value.placeholder || ""}
            required={value.required || false}
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            errorClass={errorClass}
            className={`${value.className}` || ""}
          />
        ) : (
          <Input
            id={value.id}
            name={value.name}
            type={value.type}
            placeholder={value.placeholder}
            required={value.required}
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            errorClass={errorClass}
            className={`${value.className}` || ""}
          />
        );
      case ComponentFormEnum.SELECT:
        return (
          <CustomSelectField
            id={value.id}
            name={value.name}
            value={field.value || ""}
            placeholder={value.placeholder || ""}
            options={value.options || []}
            required={value.required || false}
            errorClass={errorClass}
            onValueChange={(val) => {
              field.onChange(val);
              if (onValueChange) onValueChange(val);
            }}
          />
        );
      case ComponentFormEnum.PHONE:
        return (
          <CustomPhoneField
            {...field}
            value={field.value}
            onChange={field.onChange}
            country={value.country ?? ""}
            onlyCountries={value.onlyCountries ?? []}
            required={value.required ?? false}
            placeholder={value.placeholder ?? ""}
            className={errorClass}
            inputClassName={value.className}
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
            <FormLabel className="font-normal" htmlFor={value.id}>
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
