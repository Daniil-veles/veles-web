// import './CustomPhoneInput.scss';
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Оставляем только свойства, поддерживаемые PhoneInput, и добавляем дополнительные свойства
interface CustomPhoneInputProps {
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
}

const CustomPhoneInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CustomPhoneInputProps
> = (
  { country, onlyCountries, placeholder, required, value, onChange },
  ref
) => {
  return (
    <div className="w-full">
      <PhoneInput
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

export default React.forwardRef(CustomPhoneInput);
