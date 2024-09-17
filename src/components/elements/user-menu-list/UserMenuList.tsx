import { userListItems } from "@/const/const";
import UserMenuItem from "../user-menu-item/UserMenuItem";

function UserMenuList(): JSX.Element {
  return (
    <ul className="grid gap-y-2 mb-auto">
      {userListItems.map((item) => (
        <UserMenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default UserMenuList;
