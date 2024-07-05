import styles from "./About.module.scss";
import Container from "@/components/container/Container";
import CustomButton from "@/components/ui/custom-button/CustomButton";
import { MoveRight } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Container className={styles.customContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span>
              <b>Plan</b> 
              &nbsp;and&nbsp;
              <b>manage</b>
            </span>
          </h2>

          <p className={styles.text}>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata. Solum patrioque no sea. Mea ex malis mollis
            oporteat. Eum an expetenda consequat.
          </p>

          <CustomButton
            className={`${styles.button} px-3 py-2`}
            onClick={() => console.log()}
          >
            <span className="flex align-center">
              Узнать больше
              <MoveRight className={styles.arrow} size={10} />
            </span>
          </CustomButton>
        </div>

        <div className={styles.wrapper}>
          <img src="./about-img.svg" alt="" className={styles.img} />
        </div>
      </Container>
    </div>
  );
};

export default About;
