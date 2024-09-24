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
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10 py-10">
      <div className={`${className} relative bg-white rounded-3xl p-7`}>
        <button
          onClick={onClose}
          className="absolute top-5 end-5 w-10 h-10 flex justify-center items-center bg-c-blue-300 rounded-xl"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
