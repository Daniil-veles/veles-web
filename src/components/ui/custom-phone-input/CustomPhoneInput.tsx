// import './CustomPhoneInput.scss';
import React from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


interface CustomPhoneInputProps extends PhoneInputProps {
  country: string;
  onlyCountries: string[];
}

const CustomPhoneInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CustomPhoneInputProps
> = ({ country, onlyCountries, value, onChange, ...field }, ref) => {
  return (
    <div className="w-full">
      <PhoneInput
        {...field}
        inputProps={{ ref }}
        country={country}
        onlyCountries={onlyCountries}
        value={value}
        onChange={onChange}
        placeholder={"+7 (123) 456 78 90"}
      />
    </div>
  );
};

export default React.forwardRef(CustomPhoneInput);
