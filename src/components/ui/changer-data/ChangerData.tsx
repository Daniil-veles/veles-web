import React, { useState, useEffect } from "react";
import { PencilLine } from "lucide-react";
import ButtonLittle from "../custom-button/button-little/ButtonLittle";

interface IChangerData {
  className?: string;
  value: string;
  onEditClick?: () => void; // Функция для открытия модального окна
  isEditable?: boolean;
}

const ChangerData: React.FC<IChangerData> = ({
  className,
  value,
  onEditClick,
  isEditable = true,
}) => {
  const [inputValue, setInputValue] = useState<string>(value ?? "");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className={`${className} flex items-center`}>
      <p className="pr-2 leading-5">{inputValue}</p>

      {isEditable ? (
        <ButtonLittle onClick={onEditClick} className="flex text-gray-500" variant="minimal">
          <PencilLine className="w-[18px] h-[18px]" />
        </ButtonLittle>
      ) : null}
    </div>
  );
};

export default ChangerData;
