import { rates } from "@/const/const";
import styles from "./RateList.module.scss";
import RateItem from "../rate-item/RateItem";

const RateList: React.FC = () => {
  return (
    <ul className={styles.list}>
      {rates
        ? rates.map((rate) => (
            <RateItem key={`rate-${rate.id}`} rate={rate} />
          ))
        : ""}
    </ul>
  );
};

export default RateList;
