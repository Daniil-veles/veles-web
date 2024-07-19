// import './UserMenuList.scss';

import UserMenuItem from "@/components/user-menu-item/UserMenuItem";
import { listItems } from "@/const/const";

function UserMenuList(): JSX.Element {
  return (
    <ul className="grow">
      {listItems.map((item, index) => (
        <UserMenuItem key={index} iconName={item.iconName} text={item.text} />
      ))}
    </ul>
  );
}

export default UserMenuList;
