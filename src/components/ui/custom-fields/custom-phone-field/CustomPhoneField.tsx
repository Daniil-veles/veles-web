import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ICustomPhoneFieldProps {
  country: string;
  onlyCountries: string[];
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (
    value: string,
    data: any,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void;
  inputClassName?: string;
}

const CustomPhoneField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  ICustomPhoneFieldProps
> = (
  {
    country,
    onlyCountries,
    placeholder,
    required,
    value,
    onChange,
    inputClassName,
  },
  ref
) => {
  return (
    <div className="w-full">
      <PhoneInput
        inputClass={`bg-red-500 ${inputClassName}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputProps={{ ref, required }}
        country={country}
        onlyCountries={onlyCountries}
        containerClass="w-full"
      />
    </div>
  );
};

export default React.forwardRef(CustomPhoneField);
