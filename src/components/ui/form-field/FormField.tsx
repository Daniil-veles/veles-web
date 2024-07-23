import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
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

export enum ComponentFormEnum {
  INPUT = "input",
  SELECT = "select",
  PHONE = "phone",
}

interface IFormFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  validation?: RegisterOptions;
  componentType: ComponentFormEnum;
  defaultValue?: string;
  options?: { label: string; value: string }[];
  country?: string;
  onlyCountries?: string[];
  onValueChange?: (value: string) => void;
}

const FormField: React.FC<IFormFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  validation,
  componentType,
  options = [],
  country = "ru",
  onlyCountries = [],
  onValueChange,
}) => {
  const { control } = useFormContext();

  const renderComponent = (field: any) => {
    const sharedProps = {
      id,
      name,
      placeholder,
      ...field,
    };

    switch (componentType) {
      case "input":
        return (
          <Input
            {...sharedProps}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
          />
        );
      case "select":
        return (
          <Select
            {...sharedProps}
            value={field.value || ""}
            defaultValue={field.defaultValue}
            onValueChange={(value) => {
              field.onChange(value);
              if (onValueChange) onValueChange(value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "phone":
        return (
          <CustomPhoneInput
            {...sharedProps}
            country={country}
            onlyCountries={onlyCountries}
            value={field.value}
            onChange={field.onChange}
          />
        );
      default:
        return null;
    }
  };


  // focus-visible\:ring-2:focus-visible {
  //   --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  //   --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  //   box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  // }

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required, ...validation }}
        render={({ field, fieldState: { error } }) => {
          return (
            <FormItem>
              <FormLabel htmlFor={id}>{label}</FormLabel>
              {renderComponent(field)}
              {error && <FormMessage>{error.message}</FormMessage>}
            </FormItem>
          );
        }}
      />
    </>
  );
};

export default FormField;
