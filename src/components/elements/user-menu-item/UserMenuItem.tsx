import { useRouter } from "next/router";
import { iconMap } from "@/const/const";
import cn from "classnames";
import Link from "next/link";

interface UserListItem {
  id: number;
  iconName: string;
  text: string;
  link: string;
}

interface IUserMenuItemProps {
  item: UserListItem;
}

function UserMenuItem({ item }: IUserMenuItemProps): JSX.Element {
  const router = useRouter();
  const { iconName, text, link } = item;

  const currentPath = router.pathname.split("/").pop();
  const isActive = currentPath === link;

  const IconComponent = iconMap[iconName];

  return (
    <li className="relative pr-3">
      <Link
        className={cn(
          `flex items-center p-2 py-3 font-medium cursor-pointer rounded-lg transition-all duration-300`,
          {
            "bg-c-blue-500/10 text-c-blue-500": isActive,
            "text-c-gray-800": !isActive,
          }
        )}
        href={`/${link}`}
      >
        {isActive && (
          <span className="absolute w-1 h-full top-0 right-0 bg-c-blue-500 rounded-sm"></span>
        )}

        <IconComponent className="mr-2" size={24} />
        {text}
      </Link>
    </li>
  );
}

export default UserMenuItem;
