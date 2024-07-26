// import styles from './SettingsInfo.module.scss';

import ChangerData from "@/components/ui/changer-data/ChangerData";
import { useAppSelector } from "@/hooks";

const SettingsInfo: React.FC = () => {
  const userInfo = useAppSelector((state) => state.USER);
  console.log(userInfo);

  // if (!userInfo.id) {
  //   return "Loading";
  // }

  return (
    <div className="bg-bg-first p-6 rounded-md">
      <p className="">Ваши данные</p>

      <div className="">
          <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
            <p className="font-medium">Имя</p>

            <ChangerData value={userInfo.fullName} />
          </div>

          <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
            <p className="font-medium">Почта</p>

            <ChangerData value={userInfo.email} />
          </div>
          <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
            <p className="font-medium">Телефон</p>

            <ChangerData value={userInfo.phone} />
          </div>
      </div>
    </div>
  );
};

export default SettingsInfo;
