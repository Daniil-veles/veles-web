// import './UserMenu.scss';

import { LogOut } from "lucide-react";
import UserMenuList from "../user-menu-list/UserMenuList";
import Link from "next/link";

function UserMenu(): JSX.Element {
  return (
    <div className="flex flex-col bg-gray-200/30 rounded-2xl p-6">
      <UserMenuList />

      <Link href={'/logout'} className="flex items-center justify-center">
        <LogOut className="mr-2" />
        Выйти
      </Link>
    </div>
  );
}

export default UserMenu;
