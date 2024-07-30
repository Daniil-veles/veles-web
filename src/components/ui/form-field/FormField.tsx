// import { Controller, useFormContext } from "react-hook-form";
// import { FormItem, FormLabel, FormMessage } from "../form";
// import { Input } from "../input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../select";
// import CustomPhoneInput from "../custom-phone-input/CustomPhoneInput";
// import { IFormField } from "@/types/types.interface";

// interface IFormFieldProps {
//   value: IFormField;
// }

// const FormField: React.FC<IFormFieldProps> = ({ value }) => {
//   const {
//     id,
//     name,
//     label,
//     placeholder,
//     type = "text",
//     required = false,
//     validation,
//     componentType,
//     options = [],
//     country = "ru",
//     onlyCountries = [],
//   } = value;

//   const { control } = useFormContext();

//   const renderComponent = (field: any) => {
//     const sharedProps = {
//       id,
//       name,
//       placeholder,
//       ...field,
//     };

//     switch (componentType) {
//       case "input":
//         return (
//           <Input
//             {...sharedProps}
//             id={id}
//             name={name}
//             type={type}
//             placeholder={placeholder}
//             required={required}
//           />
//         );
//       case "select":
//         return (
//           <Select
//             {...sharedProps}
//             value={field.value || ""}
//             defaultValue={field.defaultValue}
//             onValueChange={(value) => {
//               field.onChange(value);
//               if (onValueChange) onValueChange(value);
//             }}
//           >
//             <SelectTrigger>
//               <SelectValue placeholder={placeholder} />
//             </SelectTrigger>
//             <SelectContent>
//               {options.map((option) => (
//                 <SelectItem key={option.value} value={option.value}>
//                   {option.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         );
//       case "phone":
//         return (
//           <CustomPhoneInput
//             {...sharedProps}
//             country={country}
//             onlyCountries={onlyCountries}
//             value={field.value}
//             onChange={field.onChange}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Controller
//         name={name}
//         control={control}
//         rules={{ required, ...validation }}
//         render={({ field, fieldState: { error } }) => {
//           return (
//             <FormItem>
//               <FormLabel htmlFor={id}>{label}</FormLabel>
//               {renderComponent(field)}
//               {error && (
//                 <FormMessage className="text-red-500">
//                   {error.message}
//                 </FormMessage>
//               )}
//             </FormItem>
//           );
//         }}
//       />
//     </>
//   );
// };

// export default FormField;

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

interface IFormFieldProps {
  value: IFormField;
}

const FormField: React.FC<IFormFieldProps> = ({ value }) => {
  const { control } = useFormContext();

  const renderComponent = (field: any) => {
    switch (value.componentType) {
      case ComponentFormEnum.INPUT:
        return (
          <Input
            id={value.id}
            name={value.name}
            type={value.type}
            placeholder={value.placeholder}
            required={value.required}
            {...field}
          />
        );
      case ComponentFormEnum.SELECT:
        return (
          <Select
            id={value.id}
            name={value.name}
            value={field.value || ""}
            defaultValue={field.defaultValue}
            onValueChange={(newValue) => {
              field.onChange(newValue);
              if (value.onValueChange) value.onValueChange(newValue);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={value.placeholder} />
            </SelectTrigger>
            <SelectContent>
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
            id={value.id}
            name={value.name}
            country={value.country}
            onlyCountries={value.onlyCountries}
            value={field.value}
            onChange={field.onChange}
            placeholder={value.placeholder}
            required={value.required}
            {...field}
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
        <FormItem>
          <FormLabel htmlFor={value.id}>{value.label}</FormLabel>
          {renderComponent(field)}
          {error && (
            <FormMessage className="text-red-500">{error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default FormField;
