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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks";
import { AuthorizationStatus } from "@/types/state.interface";
import Image from "next/image";
import Loading from "@/screens/loading/Loading";

const Header: React.FC = () => {
  const router = useRouter();
  const [isAuthRoute, setIsAuthRoute] = useState(false);

  useEffect(() => {
    if (router.asPath === "/auth/login" || router.asPath === "/auth/sign-up") {
      // console.log("Вы на странице: /auth");
      setIsAuthRoute(true);
    }
  }, [router]);

  const isAuth = useAppSelector((state) => state.USER.isAuth);

  if (!isAuth) {
    return <Loading />;
  }

  return (
    <Container className="">
      <div className="fixed container mx-auto w-full left-1/2 top-4 transform -translate-x-1/2 z-10">
        <div className="relative w-full bg-gray-200/30 p-3 px-6 flex justify-between items-center rounded-md">
          <span className="absolute inset-0 rounded-lg backdrop-blur-md pointer-events-none -z-10 transition-colors duration-300 ease"></span>

          <Link className="relative block w-8 h-8 mr-5" href={"/"}>
            <Image
              src="/header-logo.png"
              alt="Logo"
              layout="fill"
              objectFit="cover"
            />
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
                    {isAuth === AuthorizationStatus.Auth ? (
                      <>
                        <Link href="/dashboard">
                          <DropdownMenuItem className="p-4 text-md rounded-xl hover:bg-gray-200/30">
                            Личный кабинет
                          </DropdownMenuItem>
                        </Link>

                        <Link href="/logout">
                          <DropdownMenuItem className="p-4 text-md rounded-xl hover:bg-gray-200/30">
                            Выйти
                          </DropdownMenuItem>
                        </Link>

                        <Link href="/crm">
                          <DropdownMenuItem className="p-4 text-md rounded-xl hover:bg-gray-200/30">
                            Организация
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
