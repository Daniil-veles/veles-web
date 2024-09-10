import { LogOut, MessageCircle } from "lucide-react";
import UserMenuList from "../user-menu-list/UserMenuList";
import Link from "next/link";
import ButtonLittle from "@/components/ui/custom-button/button-little/ButtonLittle";

function UserMenu(): JSX.Element {
  return (
    <div className="flex flex-col grow bg-white rounded-3xl py-10 pl-4">
      <img className="w-12 h-12 mb-12" src="/header-logo.png" />

      <UserMenuList />

      <div className="pr-4">
        <div className="relative w-full h-[168px] flex flex-col justify-end rounded-3xl p-5 pb-6 bg-c-blue-300 mb-12">
          <img className="relative -top-4 w-[140px]" src="./support-icon.svg" alt="" />
          
          <ButtonLittle className="w-full">
            <MessageCircle className="mr-2" size={16} />
            Поддержка
          </ButtonLittle>
        </div>

        <Link
          href={"/logout"}
          className="flex items-center pl-2 text-c-dark-gray hover:text-c-blue-500"
        >
          <LogOut className="mr-3" size={24} />
          Выйти
        </Link>
      </div>
    </div>
  );
}

export default UserMenu;
