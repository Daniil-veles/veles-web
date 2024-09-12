import { ICustomSelect, IOption } from "@/types/form.interface";
import { FieldError } from "react-hook-form";


interface ICustomSelectProps<T extends IOption>
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  className?: string;
  fieldData: ICustomSelect<T>;
  fieldValue: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: () => void;
  error?: FieldError;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

function CustomSelect<T extends IOption>({
  className,
  fieldData,
  fieldValue,
  onChange,
  onBlur,
  error,
  onKeyDown,
  ...props
}: ICustomSelectProps<T>): JSX.Element {
  const { id, name, label, options } = fieldData;

  return (
    <div>
      {label && (
        <label className="block text-black mb-2" htmlFor={id}>
          {label}
        </label>
      )}

      <select
        className={`${className} w-full bg-white border border-gray-300 rounded-xl px-3 py-2 ${
          error ? "border-red-500" : ""
        }`}
        name={name}
        id={id}
        value={fieldValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        {...props}
      >
        {options && options?.length > 0 ? (
          options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))
        ) : (
          <option value="">Нет доступных опций</option>
        )}
      </select>

      {error && <p className="text-red-500 mt-1">{error.message}</p>}
    </div>
  );
}

export default CustomSelect;
