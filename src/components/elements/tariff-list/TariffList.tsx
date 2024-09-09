import ButtonLittle from "@/components/ui/custom-button/button-little/ButtonLittle";
import { cn } from "classnames";

const mockPrice = [
  {
    name: "Минимальный",
    description:
      "Подходит для индивидуальных пользователей и небольших проектов. Включает базовые функции и поддержку.",
    price: 10000,
  },
  {
    name: "Базовый",
    description:
      "Оптимальный вариант для малых и средних предприятий. Включает расширенные функции и улучшенную поддержку.",
    price: 20000,
  },
  {
    name: "Профессиональный",
    description:
      "Подходит для профессионалов и развивающихся компаний. Включает все функции, приоритетную поддержку и доступ к дополнительным инструментам.",
    price: 30000,
  },
  {
    name: "Корпоративный",
    description:
      "Идеальный выбор для крупных организаций. Включает все функции, премиум-поддержку и индивидуальные решения под ваши бизнес-задачи.",
    price: 100000,
  },
];

const TariffList: React.FC = () => {
  return (
    <div className="">
      <ul className="grid grid-cols-4 rounded-lg bg-gray-200/10">
        {mockPrice
          ? mockPrice.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center p-4 py-8 pt-12 bg-gray-200/10 transition-transform duration-300 hover:bg-white hover:shadow-lg hover:transform hover:scale-105 hover:transform-origin-center hover:rounded-lg hover:z-2"
              >
                <p className="text-4xl mb-6">{item.price}</p>

                <h3 className="text-xl mb-3">{item.name}</h3>

                <h4 className="mb-4 text-gray-500 text-center mb-3">
                  {item.description}
                </h4>

                <ButtonLittle className="mt-auto w-full">Перейти</ButtonLittle>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default TariffList;
