import Link from "next/link";

interface HeaderMenu {
  id: number,
  text: string,
  link: string,
}

interface HeaderMenuItemProps {
  value: HeaderMenu;
  isActive: boolean;
  onClick: () => void;
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
  value,
  isActive,
  onClick,
}) => {
  const { text, link } = value;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); 
    onClick();
  };

  return (
    <li
      className={`flex items-center h-full min-h-[30px] mr-10 cursor-pointer transition-colors duration-300 ease ${
        isActive ? "text-blue-500" : ""
      }`}
    >
      <Link
        href={link}
        scroll={false}
        className="block h-full no-underline hover:text-blue-500"
        onClick={handleClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default HeaderMenuItem;
