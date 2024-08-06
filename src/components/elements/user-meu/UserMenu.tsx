// import './UserMenu.scss';

import { LogOut } from "lucide-react";
import UserMenuList from "../user-menu-list/UserMenuList";

function UserMenu(): JSX.Element {
  return (
    <div className="flex flex-col bg-gray-200/30 rounded-2xl p-6">
      <UserMenuList />

      <div className="flex items-center justify-center">
        <LogOut className="mr-2" />
        Выйти
      </div>
    </div>
  );
}

export default UserMenu;
