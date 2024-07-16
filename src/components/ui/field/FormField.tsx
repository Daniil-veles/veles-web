import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormMessage } from "../form";
import { Input } from "../input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";

interface IFormFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  validation?: RegisterOptions;
  componentType: "input" | "select";
  options?: { label: string; value: string }[];
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
            <FormLabel htmlFor={id}>{label}</FormLabel>
            {componentType === "input" ? (
              <Input
                {...field}
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
              />
            ) : componentType === "select" ? (
              <Select
                {...field}
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
            ) : null}
            {error && <FormMessage>{error.message}</FormMessage>}
          </FormItem>
        )}
      />
    </>
  );
};

export default FormField;
