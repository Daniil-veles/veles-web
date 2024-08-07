import React, { useState, useEffect } from "react";
import { PencilLine } from "lucide-react";

interface IChangerData {
  className?: string;
  value: string;
}

const ChangerData: React.FC<IChangerData> = ({
  className,
  value,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value ?? "");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`${className} flex items-end`}>
      <p className="pr-2 leading-5">{inputValue}</p>

      <button className="block w-[18px] h-[18px]" onClick={() => setIsEditing(true)}>
        <PencilLine className="text-gray-500 w-full h-full" />
      </button>
    </div>
  );
};

export default ChangerData;
