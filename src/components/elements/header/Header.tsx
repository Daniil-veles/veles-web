import HeaderMenu from "../header-menu/HeaderMenu";
import Container from "@/components/container/Container";
import Link from "next/link";
import { useAppSelector, useAuth } from "@/hooks";
import { AuthorizationStatus } from "@/types/state.interface";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const userInfo = useAppSelector((state) => state.USER);
  const { authStatus } = useAuth();
  console.log(userInfo);

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

          <HeaderMenu />

          <div className="flex items-center">
            <div className="relative flex items-center">
              {authStatus === AuthorizationStatus.Auth ? (
                <Link
                  href={"/profile"}
                  className="flex items-center px-3 rounded-lg"
                >
                  <img
                    className="w-7 h-7 mr-2 rounded-full"
                    // src={userInfo.picture}
                    src={"/userIcon.webp"}
                    alt="Аватарка"
                  />

                  {/* <p>{userInfo.fullName}</p> */}
                  <p className="min-w-max mr-2">Даниил Суворов</p>

                  <ChevronDown size={20} />
                </Link>
              ) : (
                <div>
                  <Link className="bg-c-blue-500 hover:bg-c-blue-800 text-white p-2 rounded-md mr-2" href={"/auth/sign-up"}>Зарегистрироваться</Link>
                  <Link className="bg-c-blue-500 hover:bg-c-blue-800 text-white p-2 rounded-md" href={"/auth/login"}>Войти</Link>
                </div>
              )}

              <div className="absolute hidden">
                {authStatus === AuthorizationStatus.Auth ? (
                  <>
                    <Link
                      className="p-4 text-md rounded-xl hover:bg-gray-200/30"
                      href="/profile"
                    >
                      Личный кабинет
                    </Link>

                    <Link
                      className="p-4 text-md rounded-xl hover:bg-gray-200/30"
                      href="/logout"
                    >
                      Выйти
                    </Link>
                  </>
                ) : (
                  <Link
                    className="p-4 text-md rounded-xl hover:bg-gray-200/30"
                    href="/auth"
                  >
                    Войти
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
