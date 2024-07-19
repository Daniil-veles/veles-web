// import './UserMenu.scss';

import { LogOut } from "lucide-react";
import UserMenuList from "../user-menu-list/UserMenuList";

function UserMenu(): JSX.Element {
  return (
    <div className="flex flex-col bg-bg-third-easy rounded-2xl p-6">
      <h2 className="">CRM</h2>

      <UserMenuList />

      <div className="flex items-center">
        <LogOut />
        Выйти
      </div>
    </div>
  );
}

export default UserMenu;
