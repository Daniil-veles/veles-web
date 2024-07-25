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
import { ComponentFormEnum } from "@/types/types.interface";

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
              {error && <FormMessage className="text-red-500">{error.message}</FormMessage>}
            </FormItem>
          );
        }}
      />
    </>
  );
};

export default FormField;
