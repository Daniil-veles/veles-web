import { Rate } from "@/types/types";
import styles from "./RateItem.module.scss";
import { CircleCheckBig } from "lucide-react";
import Button from "@/components/ui/button/Button";

interface RateItemProps {
  rate: Rate;
}

const RateItem: React.FC<RateItemProps> = ({ rate }) => {
  const { id, title, price, text, options } = rate;
  const isSecond = id === 2;

  return (
    <li
      className={`${styles.item} ${isSecond ? `${styles.current}` : ""} rounded-lg px-7 py-6`}
    >
      <h3 className={`${styles.title} mb-3`}>{title}</h3>

      <p className={`${styles.price} ${isSecond ? `${styles.current}` : ""} mb-3`}>{price}</p>

      <p className={`${styles.text} mb-4`}>{text}</p>

      <ul className={`${styles.subList} mb-6`}>
        {options
          ? options.map((option) => (
              <li key={option.id} className={styles.subItem}>
                <CircleCheckBig className={styles.subIcon} stroke={`${isSecond ? "#FFE492" : "#000"}`} />

                <p className={styles.subText}>{option.text}</p>
              </li>
            ))
          : ""}
      </ul>

      <Button className={`${styles.button} ${isSecond ? `${styles.current}` : ""} px-5 py-2`}>
        Подробнее
      </Button>
    </li>
  );
};

export default RateItem;
