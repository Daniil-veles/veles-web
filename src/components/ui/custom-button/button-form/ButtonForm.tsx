// import './ButtonForm.scss';

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
      className={`text-base py-4 transition-colors duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white rounded-full font-normal ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
