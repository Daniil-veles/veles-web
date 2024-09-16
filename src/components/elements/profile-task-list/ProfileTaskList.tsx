import { IProfileTask } from "@/types/common.interface";
import ProfileTaskItem from "../profile-task-item/ProfileTaskItem";

interface IProfileObjectListProps {
  list: IProfileTask[];
}

const ProfileTaskList: React.FC<IProfileObjectListProps> = ({ list }) => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-x-8 mb-8">
        <li className="bg-white rounded-3xl p-4">
          <div className="flex w-16 h-16 border-2 border-c-blue-500 rounded-full items-center justify-center mb-4">
            <p className="text-xl">{list.length}</p>
          </div>

          <p className="font-medium text-base">Всего задач</p>
          <small className="text-c-gray-800">Описание характеристики</small>
        </li>

        <li className="bg-white rounded-3xl p-4">
          <div className="flex w-16 h-16 border-2 border-c-blue-500 rounded-full items-center justify-center mb-4">
            <p className="text-xl">{"20"}</p>
          </div>

          <p className="font-medium text-base">Осталось выполнить</p>
          <small className="text-c-gray-800">Описание характеристики</small>
        </li>

        <li className="bg-white rounded-3xl p-4">
          <div className="flex w-16 h-16 border-2 border-c-blue-500 rounded-full items-center justify-center mb-4">
            <p className="text-xl">{"30"}</p>
          </div>

          <p className="font-medium text-base">Задач на неделю</p>
          <small className="text-c-gray-800">Описание характеристики</small>
        </li>
      </ul>

      <h3 className="text-lg font-medium mb-5">Мои задачи</h3>

      <ul className="max-h-[calc(100vh-490px)] overflow-y-auto grid gap-y-4 pr-4">
        {list.length > 0 &&
          list.map((task, index) => (
            <ProfileTaskItem task={task} key={`${task.title}-${index}`} />
          ))}
      </ul>
    </div>
  );
};

export default ProfileTaskList;
