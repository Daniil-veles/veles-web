// import styles from './ChangeData.module.scss';

import { useState } from "react";
import { Input } from "../input";

interface IChangerData {
  value: string;
}

const ChangerData: React.FC<IChangerData> = ({ value }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="">
      {isChecked ? <Input className="h-8" value={value} /> : <p>{value}</p>}
    </div>
  );
};

export default ChangerData;

