// import styles from './UserVerifiedData.module.scss';

import { Button } from "@/components/ui/button";
import { UserInfo } from "@/types/state.interface";
import { CircleCheck } from "lucide-react";

interface IUserVerifiedDataProps {
  title: string;
  value: string;
  userInfo: UserInfo;
  handleVerifiedEmail: () => void;
}

const UserVerifiedData: React.FC<IUserVerifiedDataProps> = ({
  title,
  value,
  userInfo,
  handleVerifiedEmail,
}) => {
  return (
    <div className="mt-8 border border-zinc-200 rounded p-3">
      <div className="flex items-center justify-between">
        <p className="text-gray-500">
          {title}
            &nbsp;
          <span className="text-black">{value}</span>
        </p>

        {userInfo.isVerified ? (
          <CircleCheck size={24} className="stroke-green-500" />
        ) : (
          <Button
            className="bg-blue-500 text-white"
            onClick={handleVerifiedEmail}
          >
            Подтвердить
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserVerifiedData;
