import { iconMap } from "@/const/const";
import cn from "classnames";

interface UserListItem {
  id: number;
  iconName: string;
  text: string;
  link: string;
}

interface IUserMenuItemProps {
  item: UserListItem;
  isActive: boolean;
  onClick: () => void;
}

function UserMenuItem({
  item,
  isActive,
  onClick,
}: IUserMenuItemProps): JSX.Element {
  const { iconName, text } = item;
  const IconComponent = iconMap[iconName];

  return (
    <li
      onClick={onClick}
      className={cn(
        `flex items-center p-3 mb-4 cursor-pointer rounded-r-lg border-2 border-transparent transition-all duration-300`,
        {
          "bg-white border-l-blue-500 animate-slideIn": isActive,
        }
      )}
    >
      <IconComponent className="mr-2" size={24} />
      {text}
    </li>
  );
}

export default UserMenuItem;
