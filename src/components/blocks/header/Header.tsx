import { CircleUser } from "lucide-react";
import HeaderMenu from "../../elements/header-menu/HeaderMenu";
import styles from "./Header.module.scss";
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
    <div className={styles.header}>
      <Container>
        <div
          className={`${styles.wrapper} container mx-auto flex justify-between items-center rounded-md`}
        >
          <img src="" alt="" className={styles.logo} />

          <HeaderMenu />

          <div className="flex items-center">
            <Link className={styles.link} href={"/sign-up"}>Регистрация</Link>

            <div className="relative flex z-2 items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className={styles.dropdown}>
                  <CircleUser className={styles.user} />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="absolute right-0 p-2 mt-2 right-0 w-60 bg-white border border-gray-200 rounded-xl shadow-lg z-20">
                  <DropdownMenuItem className="p-3 text-md">
                    Личный кабинет
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 text-md">
                    Пукнт 2
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 text-md">
                    Пукнт 3
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 text-md">
                    Пукнт 4
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
