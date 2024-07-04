import { Feature } from "@/types/types";
import styles from "./FeatureItem.module.scss";

interface FeatureItemProps {
  feature: Feature;
}

const FeaturesItem: React.FC<FeatureItemProps> = ({feature}) => {
  return (
    <li className={`${styles.item} rounded-lg p-6`}>
      <img src={feature.img} alt="" className={`${styles.img} mb-4`} />

      <h3 className={`${styles.title} mb-1`}>
        {feature.title}
      </h3>

      <p className={styles.description}>
        {feature.description}
      </p>
    </li>
  );
};

export default FeaturesItem;
