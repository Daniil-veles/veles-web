import { CircleUser } from "lucide-react";
import HeaderMenu from "../header-menu/HeaderMenu";
import Container from "@/components/container/Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Container className="">
      <div className="fixed container mx-auto w-full left-1/2 top-4 transform -translate-x-1/2 z-10">
        <div className="w-full bg-bg-third-easy p-4 px-6 flex justify-between items-center rounded-md">
          <span className="absolute inset-0 rounded-lg backdrop-blur-md pointer-events-none -z-10 transition-colors duration-300 ease"></span>

          <img src="" alt="" className="w-24 h-8 mr-10" />

          <HeaderMenu />

          <div className="flex items-center">
            <Link className="text-black" href="/sign-up">
              Регистрация
            </Link>

            <div className="relative flex ml-5 items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="relative">
                  <CircleUser className="text-black" />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="absolute right-0 p-2 mt-2 right-0 w-60 bg-white border border-gray-200 rounded-xl shadow-lg z-20">
                  <Link href="/user">
                    <DropdownMenuItem className="p-3 text-md">
                      Личный кабинет
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/login">
                    <DropdownMenuItem className="p-3 text-md">
                      Войти
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className="p-3 text-md">
                    Пукнт 3
                  </DropdownMenuItem>
                  <Link href="/logout">
                    <DropdownMenuItem className="p-3 text-md">
                      Выйти
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
