import { CircleCheckBig } from "lucide-react";
import CustomButton from "@/components/ui/custom-button/CustomButton";
import { Rate } from "@/types/types.interface";

interface RateItemProps {
  rate: Rate;
}

const RateItem: React.FC<RateItemProps> = ({ rate }) => {
  const { id, title, price, text, options } = rate;
  const isSecond = id === 2;

  return (
    <li
      className={`border border-orange-600 rounded-lg px-7 py-6 ${isSecond ? 'bg-blue-900 text-white pt-15 pb-15 border-none' : ''}`}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className={`text-3xl font-semibold mb-3 ${isSecond ? 'text-yellow-200' : ''}`}>{price}</p>

      <p className="mb-4">{text}</p>

      <ul className="mb-6">
        {options
          ? options.map((option) => (
              <li key={option.id} className="flex items-center">
                <CircleCheckBig className="w-4 h-4 mr-2" stroke={isSecond ? "#FFE492" : "#000"} />
                <p>{option.text}</p>
              </li>
            ))
          : ""}
      </ul>

      <CustomButton className={`px-5 py-2 border border-orange-600 ${isSecond ? 'bg-blue-500 border-blue-500 border-none' : ''}`}>
        Подробнее
      </CustomButton>
    </li>
  );
};

export default RateItem;
