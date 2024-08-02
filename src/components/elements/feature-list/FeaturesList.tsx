import { features } from "@/const/const";
import FeaturesItem from "../feature-item/FeatureItem";


const FeatureList: React.FC = () => {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {features
        ? features.map((feature) => (
            <FeaturesItem key={`feature-${feature.id}`} feature={feature} />
          ))
        : ""}
    </ul>
  );
};

export default FeatureList;
