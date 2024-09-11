import React from "react";

interface IButtonFormProps {
  className?: string;
  children: React.ReactNode;
}

const ButtonForm: React.FC<IButtonFormProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button
    className={`text-sm w-min py-2 px-8 transition-colors duration-300 ease-in-out bg-c-blue-500 hover:bg-c-blue-600 active:bg-c-blue-800 text-white rounded-xl font-normal ${className}`}
    {...props}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
