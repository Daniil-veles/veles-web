import { CircleCheckBig } from "lucide-react";
import { Rate } from "@/types/types.interface";
import ButtonLittle from "@/components/ui/custom-button/button-little/ButtonLittle";

interface RateItemProps {
  rate: Rate;
}

const RateItem: React.FC<RateItemProps> = ({ rate }) => {
  const { id, title, price, text, options } = rate;
  const isSecond = id === 2;

  return (
    <li
      className={`border border-orange-600 rounded-lg px-7 py-6 ${
        isSecond ? "bg-blue-900 text-white pt-15 pb-15 border-none" : ""
      }`}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p
        className={`text-3xl font-semibold mb-3 ${
          isSecond ? "text-yellow-200" : ""
        }`}
      >
        {price}
      </p>

      <p className="mb-4">{text}</p>

      <ul className="mb-6">
        {options
          ? options.map((option) => (
              <li key={option.id} className="flex items-center">
                <CircleCheckBig
                  className="w-4 h-4 mr-2"
                  stroke={isSecond ? "#FFE492" : "#000"}
                />

                <p>{option.text}</p>
              </li>
            ))
          : ""}
      </ul>

      <ButtonLittle
        variant={"outline"}
        borderColor={isSecond ? ["", ""] : ["border-orange-600", ""]}
        textColor={isSecond ? "text-white" : ""}
        className={
          isSecond
            ? "border-white hover:bg-white hover:text-black"
            : "hover:bg-white hover:bg-orange-600 hover:text-white"
        }
      >
        Подробнее
      </ButtonLittle>
    </li>
  );
};

export default RateItem;
