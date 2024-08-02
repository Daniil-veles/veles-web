import { HeaderMenu } from "@/types/types.interface";
import Link from "next/link";

interface HeaderMenuItemProps {
  value: HeaderMenu;
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ value }) => {
  const { text, link } = value;

  return (
    <li className="flex items-center h-full min-h-[30px] mr-10 cursor-pointer transition-colors duration-300 ease">
      <Link href={link} className="block h-full no-underline hover:text-blue-500">
        {text}
      </Link>
    </li>
  );
};

export default HeaderMenuItem;
