import { LogOut } from "lucide-react";
import UserMenuList from "../user-menu-list/UserMenuList";
import Link from "next/link";

function UserMenu(): JSX.Element {
  return (
    <div className="flex flex-col grow bg-white rounded-3xl py-10 pl-4">
      <img className="w-12 h-12 mb-12" src="/header-logo.png" />

      <UserMenuList />

      <Link href={"/logout"} className="flex items-center justify-center">
        <LogOut className="mr-2" />
        Выйти
      </Link>
    </div>
  );
}

export default UserMenu;
