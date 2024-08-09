import { iconMap } from "@/const/const";
import { UserListItem } from "@/types/types.interface";
import cn from "classnames";

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
      className={cn("relative flex items-center p-3 mb-4 cursor-pointer", {
        "active": isActive,
      })}
    >
      <IconComponent className="mr-2" size={24} />
      {text}
    </li>
  );
}

export default UserMenuItem;
