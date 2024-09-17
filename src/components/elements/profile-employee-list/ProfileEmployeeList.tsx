import { IProfileEmployee } from "@/types/common.interface";
import ProfileEmployeeItem from "../profile-employee-item/ProfileEmployeeItem";

interface IProfileEmployeeListProps {
  list: IProfileEmployee[];
}

const ProfileEmployeeList: React.FC<IProfileEmployeeListProps> = ({ list }) => {
  return (
    <ul className="max-h-[calc(100vh-250px)] overflow-y-auto grid grid-cols-3 gap-[30px] pr-4">
      {list.length > 0 &&
        list.map((employee, index) => (
          <ProfileEmployeeItem employee={employee} key={`${employee.name}-${index}`} />
        ))}
    </ul>
  );
};

export default ProfileEmployeeList;
