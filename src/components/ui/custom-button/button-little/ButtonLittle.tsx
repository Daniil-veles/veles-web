type ButtonVariant = "outline" | "solid" | "minimal"; // Варианты оформления кнопки

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant; // Выбор варианта оформления
  bgColor?: string[]; // Цвет фона для варианта 'solid'
  borderColor?: string[]; // Цвет границы для варианта 'outline'
  textColor?: string; // Цвет границы для варианта 'outline'
  className?: string; // Дополнительные классы
  children: React.ReactNode;
}

const ButtonLittle: React.FC<CustomButtonProps> = ({
  variant = "solid",
  bgColor = ["bg-blue-500", "hover:bg-blue-600"],
  borderColor = ["border-blue-500", "hover:border-blue-600"],
  textColor = "text-white",
  className = "",
  children,
  ...props
}) => {
  let buttonStyles = "";

  switch (variant) {
    case "outline":
      buttonStyles = `p-3 py-2 border-2 ${borderColor[0]} ${borderColor[1]} ${textColor}`;
      break;
    case "solid":
      buttonStyles = `p-3 py-2 ${bgColor[0]} ${bgColor[1]} ${textColor}`;
      break;
    case "minimal":
      buttonStyles = `p-0 bg-transparent text-blue-800 hover:text-blue-600 `;
      break;
  }

  return (
    <button
      className={`text-base rounded-md transition-colors duration-300 ease-in-out ${buttonStyles} ${className}`}
      {...props}
    >
      <span className="flex items-center">{children}</span>
    </button>
  );
};

export default ButtonLittle;
