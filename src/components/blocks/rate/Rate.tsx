import RateList from "@/components/elements/rate-list/RateList";
import styles from "./Rate.module.scss";
import Container from "@/components/container/Container";

const Rate: React.FC = () => {
  return (
    <div className={styles.rate}>
      <Container className={styles.customContainer}>
        <h2 className={`${styles.title} text-center mb-4`}>Features</h2>

        <p className={`${styles.text} text-center mb-10`}>
          This starter template is a guide to help you get started with Next.js
          for large scale applications. Feel free to add or remove features to
          suit your needs.
        </p>

        <RateList />
      </Container>
    </div>
  );
};

export default Rate;
