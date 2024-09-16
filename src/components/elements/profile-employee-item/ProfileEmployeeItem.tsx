import { IProfileEmployee } from "@/types/common.interface";

interface IProfileEmployeeItemProps {
  employee: IProfileEmployee;
}

const ProfileEmployeeItem: React.FC<IProfileEmployeeItemProps> = ({
  employee,
}) => {
  return (
    <li className="flex flex-col items-center bg-white rounded-3xl p-5">
      <div className="w-[58px] h-[58px] p-1 border-2 border-c-blue-500 rounded-full mb-4">
        <img
          className="w-full h-full rounded-full"
          src={'./img-2.webp'}
        //   src={employee.avatar}
        //   alt={employee.name}
        />
      </div>

      <h3 className="text-lg font-medium text-center">{employee.name}</h3>

      <p className="mb-2">{employee.position}</p>

      <p className="border border-c-gray-800 p-1 rounded-md">
        {employee.level}
      </p>
    </li>
  );
};

export default ProfileEmployeeItem;
