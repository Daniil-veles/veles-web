import HeaderMenu from "@/components/elements/header-menu/HeaderMenu";
import styles from "./Footer.module.scss";
import Container from "@/components/container/Container";
import CustomButton from "@/components/ui/custom-button/CustomButton";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.customContainer}>
        <div className="flex justify-between items-center py-4 pb-6">
          <img src="" alt="" className={styles.logo} />

          <HeaderMenu />

          <div className="flex items-center">
            <CustomButton
              className={styles.button}
              onClick={() => console.log("Clicked")}
            >
              Регистрация
            </CustomButton>
          </div>
        </div>

        <p className="">Copyright © 2018 by Random site</p>
      </Container>
    </div>
  );
};

export default Footer;
