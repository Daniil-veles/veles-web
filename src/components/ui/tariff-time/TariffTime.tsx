import cn from "classnames";
import { useState } from "react";

const mockTime = [
  { name: "Месяц", time: 1, sale: '15%' },
  { name: "3 месяца", time: 3, sale: '20%' },
  { name: "Полгода", time: 6, sale: '30%' },
  { name: "Год", time: "12", sale: '40%' },
];

const TariffTime: React.FC = () => {
  const [tariffTime, setTariffTime] = useState(6);

  return (
    <div className="flex justify-center mb-8">
      <ul className="flex p-1 w-[70%] rounded-full border border-gray-200">
        {mockTime
          ? mockTime.map((item, index) => (
              <li className="flex flex-grow" key={`item-${index}`}>
                <button
                  className={cn(
                    "block w-full py-3 px-4 rounded-full text-center",
                    tariffTime === item.time ? "bg-gray-200/30 font-medium" : null
                  )}
                  onClick={() => setTariffTime(item.time)}
                >
                  {item.name}
                </button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default TariffTime;
