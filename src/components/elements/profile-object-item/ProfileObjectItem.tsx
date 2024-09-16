import { IProfileObject } from "@/types/common.interface";
import { Calendar } from "lucide-react";

interface IProfileObjectItemProps {
  object: IProfileObject;
}

const ProfileObjectItem: React.FC<IProfileObjectItemProps> = ({ object }) => {
  return (
    <li className="grid grid-cols-2 bg-white rounded-3xl">
      <div className="flex flex-col justify-between p-5 border-r border-c-gray-500">
        <div className="flex items-end mb-4">
          <img
            className="w-12 h-12 rounded-lg mr-4"
            src="./img-2.webp"
            alt="Фото"
          />

          <h3 className="text-lg font-medium">{object.title}</h3>
        </div>

        <div className="flex justify-between">
          <p className="flex items-center text-c-gray-800">
            <Calendar className="mr-2" />

            <span>
              Создана:
              {object.data}
            </span>
          </p>

          <p
            className={`font-medium 
                ${object.priority === "high" ? "text-red-500" : ""}
                ${object.priority === "medium" ? "text-c-yellow-500" : ""}
                ${object.priority === "low" ? "text-c-green-500" : ""}
            `}
          >
            {object.priority}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between p-5">
        <h3 className="text-base font-medium mb-4">Данные о проекте</h3>

        <ul className="flex justify-between">
          <li className="flex flex-col">
            <p className="text-c-gray-800">Все задачи:</p>

            <p className="font-medium">{object.tasks}</p>
          </li>

          <li className="flex flex-col">
            <p className="text-c-gray-800">Активные:</p>
            <p className="font-medium">{object.activeTasks}</p>
          </li>

          <li className="flex flex-col">
            <p className="text-c-gray-800">Участники:</p>
            <div className="flex items-center">
              {object.employee && object.employee.length > 0
                ? object.employee
                    .slice(0, 4)
                    .map((employee, index) => (
                      <img
                        key={index}
                        className="w-6 h-6 rounded-full bg-c-gray-800"
                        src={employee.picture}
                        alt={employee.name}
                      />
                    ))
                : null}

              {object.employee && object.employee.length > 4 && (
                <span className="flex items-center justify-center bg-c-blue-800 text-white text-sm w-6 h-6 rounded-full">
                  +{object.employee.length - 4}
                </span>
              )}
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ProfileObjectItem;
