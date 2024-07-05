import { CircleUser, MoveRight } from "lucide-react";
import HeaderMenu from "../../elements/header-menu/HeaderMenu";
import styles from "./Header.module.scss";
import Container from "@/components/container/Container";
import CustomButton from "@/components/ui/custom-button/CustomButton";

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
            <CustomButton
              className={styles.button}
              onClick={() => console.log("Clicked")}
            >
              Регистрация
            </CustomButton>

            <CircleUser className={styles.user} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
