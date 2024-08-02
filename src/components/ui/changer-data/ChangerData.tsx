// import styles from './ChangeData.module.scss';

import React, { useState } from "react";
import { Input } from "../input";

interface IChangerData {
  className: string;
  value: string;
}

const ChangerData: React.FC<IChangerData> = ({ className, value }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value ?? "");

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsChecked(!isChecked);
    }
  };

  return (
    <div className={className}>
      {isChecked ? (
        <Input
          className="h-8"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleToggle}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <p onClick={handleToggle}>{inputValue}</p>
      )}
    </div>
  );
};

export default ChangerData;
