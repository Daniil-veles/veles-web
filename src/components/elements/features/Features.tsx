import Container from "@/components/container/Container";
import styles from "./Features.module.scss";
import FeatureList from "@/components/elements/feature-list/FeaturesList";

const Features: React.FC = () => {
  return (
    <div className={styles.features}>
      <Container className={styles.customContainer}>
        <h2 className={`${styles.title} text-center mb-4`}>Features</h2>

        <p className={`${styles.text} text-center mb-10`}>
          This starter template is a guide to help you get started with Next.js
          for large scale applications. Feel free to add or remove features to
          suit your needs.
        </p>

        <FeatureList />
      </Container>
    </div>
  );
};

export default Features;
