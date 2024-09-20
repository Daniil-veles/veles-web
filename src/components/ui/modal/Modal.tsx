import { X } from "lucide-react";
import React from "react";
import ButtonLittle from "../custom-button/button-little/ButtonLittle";

interface IModalProp {
  children: React.ReactNode;
  className: string;
  onClose: () => void;
}

const Modal: React.FC<IModalProp> = ({ children, className, onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10">
      <div className={`${className} bg-white rounded-3xl p-7`}>
        <ButtonLittle
          onClick={onClose}
          className="block ml-auto text-gray-400"
          variant="minimal"
        >
          <X size={26} />
        </ButtonLittle>

        {children}
      </div>
    </div>
  );
};

export default Modal;
