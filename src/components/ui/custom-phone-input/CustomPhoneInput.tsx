// import './CustomPhoneInput.scss';
import React from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// interface CustomPhoneInputProps extends PhoneInputProps {
//   name: string;
//   country: string;
//   onlyCountries: string[];
//   placeholder?: string;
//   required?: boolean;
// }

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
  // { name, country, onlyCountries, placeholder, required, value, onChange, ...field }, ref) => {
  return (
    <div className="w-full">
      {/* <PhoneInput
        {...field}
        name={name}
        inputProps={{ ref, required }}
        country={country}
        onlyCountries={onlyCountries}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      /> */}

      <PhoneInput
        country={country}
        onlyCountries={onlyCountries}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputProps={{ ref, required }} // Передача required в inputProps
      />
    </div>
  );
};

export default React.forwardRef(CustomPhoneInput);
