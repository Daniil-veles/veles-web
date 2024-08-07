import React, { useState, useEffect } from "react";
import { PencilLine } from "lucide-react";

interface IChangerData {
  className?: string;
  value: string;
  onEditClick: () => void; // Функция для открытия модального окна
}

const ChangerData: React.FC<IChangerData> = ({
  className,
  value,
  onEditClick,
}) => {
  const [inputValue, setInputValue] = useState<string>(value ?? "");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className={`${className} flex items-end`}>
      <p className="pr-2 leading-5">{inputValue}</p>

      <button className="block w-[18px] h-[18px]" onClick={onEditClick}>
        <PencilLine className="text-gray-500 w-full h-full" />
      </button>
    </div>
  );
};

export default ChangerData;
