// import styles from './Modal.module.scss';

import { Cross, X } from "lucide-react";
import React from "react";

interface IModalProp {
  children: React.ReactNode;
  className: string;
  onClose: () => void;
}

const Modal: React.FC<IModalProp> = ({ children, className, onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10">
      <div className={`${className} bg-white rounded-md shadow py-6 px-8`}>
        <button className="block ml-auto" onClick={onClose}>
          <X size={26} />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
