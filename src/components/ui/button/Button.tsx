import styles from './Button.module.scss';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} rounded-md`}
        >
            {children}
        </button>
    );
};

export default Button;