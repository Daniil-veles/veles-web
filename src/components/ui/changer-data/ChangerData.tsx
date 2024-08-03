import React, { useState, useEffect } from "react";
import { Input } from "../input";

interface IChangerData {
  className: string;
  value: string;
  isEditing: boolean;
  onEditComplete: (value: string) => void;
}

const ChangerData: React.FC<IChangerData> = ({
  className,
  value,
  isEditing,
  onEditComplete,
}) => {
  const [inputValue, setInputValue] = useState<string>(value ?? "");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEditComplete(inputValue);
    }
  };

  const handleBlur = () => {
    onEditComplete(inputValue);
  };

  return (
    <div className={className}>
      {isEditing ? (
        <Input
          className="h-8"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <p className="h-8 px-2">{inputValue}</p>
      )}
    </div>
  );
};

export default ChangerData;
