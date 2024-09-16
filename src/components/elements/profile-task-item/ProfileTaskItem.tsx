import ButtonLittle from "@/components/ui/custom-button/button-little/ButtonLittle";
import { IProfileTask } from "@/types/common.interface";

interface IProfileTaskItemProps {
  task: IProfileTask;
}

const ProfileTaskItem: React.FC<IProfileTaskItemProps> = ({ task }) => {
  // Функция для вычисления разницы в днях между двумя датами
  const calculateDuration = (startDate: string, finishDate: string) => {
    const start = new Date(startDate);
    const finish = new Date(finishDate);
    const diffTime = Math.abs(finish.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} дней`;
  };

  return (
    <li className="grid grid-cols-[1fr_max-content_max-content_max-content_max-content] gap-5 bg-white p-4 rounded-3xl">
      <div className="flex items-center">
        <p>{task.title}</p>
      </div>

      <div className="flex flex-col">
        <p className="text-c-gray-800">Продолжительность</p>
        <span>{calculateDuration(task.startDate, task.finishDate)}</span>
      </div>
      <div className="flex flex-col">
        <p className="text-c-gray-800">Дата начала</p>
        <span>{task.startDate}</span>
      </div>
      <div className="flex flex-col">
        <p className="text-c-gray-800">Дата конца</p>
        <span>{task.finishDate}</span>
      </div>

      <ButtonLittle>{task.status}</ButtonLittle>
    </li>
  );
};

export default ProfileTaskItem;
