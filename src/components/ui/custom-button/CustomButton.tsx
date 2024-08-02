// import styled from 'styled-components';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className: string;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} rounded-md`}
        >
            {children}
        </button>
    );
};

export default CustomButton;
