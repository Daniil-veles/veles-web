import { rates } from "@/const/const";
import RateItem from "../rate-item/RateItem";

const RateList: React.FC = () => {
  return (
    <ul className="grid grid-cols-3 gap-8">
      {rates
        ? rates.map((rate) => (
            <RateItem key={`rate-${rate.id}`} rate={rate} />
          ))
        : ""}
    </ul>
  );
};

export default RateList;
