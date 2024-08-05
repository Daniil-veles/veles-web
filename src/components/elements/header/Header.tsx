import { CircleUser, X } from "lucide-react";
import HeaderMenu from "../header-menu/HeaderMenu";
import Container from "@/components/container/Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/hoc/AuthContext";

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();
  const [isAuthRoute, setIsAuthRoute] = useState(false);

  useEffect(() => {
    if (router.pathname === "/login") {
      console.log("Вы на странице: /login");
      setIsAuthRoute(true);
    }
  }, [router]);

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const { isAuth } = authContext;

  return (
    <Container className="">
      <div className="fixed container mx-auto w-full left-1/2 top-4 transform -translate-x-1/2 z-10">
        <div className="relative w-full bg-gray-200/30 p-3 px-6 flex justify-between items-center rounded-md">
          <span className="absolute inset-0 rounded-lg backdrop-blur-md pointer-events-none -z-10 transition-colors duration-300 ease"></span>

          <Link href={"/"}>
            <img src="" alt="" className="w-24 h-8 mr-10" />
          </Link>

          {isAuthRoute ? <p>Авторизация</p> : <HeaderMenu />}

          <div className="flex items-center">
            {isAuthRoute ? (
              <Link href={"/"}>
                <X size={26} />
              </Link>
            ) : (
              <div className="relative flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger className="relative">
                    <CircleUser className="text-black" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="absolute right-0 p-2 mt-2 -right-3 w-60 bg-white border border-gray-200 rounded-xl shadow-lg z-20">
                    {isAuth ? (
                      <>
                        <Link href="/user">
                          <DropdownMenuItem className="p-4 text-md rounded-xl hover:bg-gray-200/30">
                            Личный кабинет
                          </DropdownMenuItem>
                        </Link>

                        <Link href="/logout">
                          <DropdownMenuItem className="p-4 text-md rounded-xl hover:bg-gray-200/30">
                            Выйти
                          </DropdownMenuItem>
                        </Link>
                      </>
                    ) : (
                      <Link href="/auth">
                        <DropdownMenuItem className="p-4 text-md rounded-xl hover:bg-gray-200/30">
                          Войти
                        </DropdownMenuItem>
                      </Link>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
