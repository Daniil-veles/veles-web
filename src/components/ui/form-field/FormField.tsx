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

interface IFormFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  validation?: RegisterOptions;
  componentType: "input" | "select" | "phone";
  options?: { label: string; value: string }[];
  country?: string;
  onlyCountries?: string[];
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
            onValueChange={field.onChange}
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
              {error && <FormMessage>{error.message}</FormMessage>}
            </FormItem>
          );
        }}
      />
    </>
  );
};

export default FormField;
