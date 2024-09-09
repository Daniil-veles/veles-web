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
    className={`text-sm w-min py-3 px-10 transition-colors duration-300 ease-in-out bg-c-blue hover:bg-c-blue-darker text-white rounded-xl font-normal ${className}`}
    {...props}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
