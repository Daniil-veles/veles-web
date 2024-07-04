import { features } from "@/const/const";
import styles from "./FeatureList.module.scss";
import FeaturesItem from "../feature-item/FeatureItem";


const FeatureList: React.FC = () => {
  return (
    <ul className={styles.list}>
      {features
        ? features.map((feature) => (
            <FeaturesItem key={`feature-${feature.id}`} feature={feature} />
          ))
        : ""}
    </ul>
  );
};

export default FeatureList;
