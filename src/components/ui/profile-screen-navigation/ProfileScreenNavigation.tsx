import cn from "classnames";
import { MoveLeft, MoveRight } from "lucide-react";

interface IProfileScreenNavigationProps {
  isCommonInfo: boolean;
  cb: (state: boolean) => void;
}

const ProfileScreenNavigation: React.FC<IProfileScreenNavigationProps> = ({
  isCommonInfo,
  cb,
}) => {
  return (
    <div className="flex justify-between items-center text-c-gray-800">
      {!isCommonInfo ? (
        <button onClick={() => cb(true)}>
          <MoveLeft size={18} />
        </button>
      ) : (
        <span className="block w-[18px]"></span>
      )}

      <div className="flex gap-2">
        <span
          className={cn(
            "block w-2 h-2 rounded-full transition-colors duration-500 ease-in-out ease",
            {
              "bg-c-blue-500": isCommonInfo,
              "bg-c-gray-800": !isCommonInfo,
            }
          )}
        ></span>
        <span
          className={cn(
            "block w-2 h-2 rounded-full transition-colors duration-500 ease-in-out ease",
            {
              "bg-c-blue-500": !isCommonInfo,
              "bg-c-gray-800": isCommonInfo,
            }
          )}
        ></span>
      </div>

      {isCommonInfo ? (
        <button onClick={() => cb(false)}>
          <MoveRight size={18} />
        </button>
      ) : (
        <span className="block w-[18px]"></span>
      )}
    </div>
  );
};

export default ProfileScreenNavigation;
