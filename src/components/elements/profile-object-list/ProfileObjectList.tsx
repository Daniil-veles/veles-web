import { IProfileObject } from "@/types/common.interface";
import ProfileObjectItem from "../profile-object-item/ProfileObjectItem";

interface IProfileObjectListProps {
  list: IProfileObject[];
}

const ProfileObjectList: React.FC<IProfileObjectListProps> = ({ list }) => {
  return (
    <ul className="max-h-[calc(100vh-250px)] overflow-y-auto grid gap-y-4 pr-4">
      {list.length > 0 &&
        list.map((object, index) => (
          <ProfileObjectItem object={object} key={`${object.title}-${index}`} />
        ))}
    </ul>
  );
};

export default ProfileObjectList;
