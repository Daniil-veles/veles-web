// import './UserMenuList.scss';
"use client";

import UserMenuItem from "@/components/user-menu-item/UserMenuItem";
import { userListItems } from "@/const/const";
import { getIndicatorStyle } from "@/utils/utils";
import { useEffect, useRef, useState } from "react";

function UserMenuList(): JSX.Element {
  const [activeId, setActiveId] = useState<number>(userListItems[0].id);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateIndicatorStyle = () => {
      if (listRef.current) {
        const activeItem = listRef.current?.querySelector(".active");
        if (activeItem) {
          setIndicatorStyle(getIndicatorStyle(activeItem as HTMLElement, listRef.current));
        }
      }
    };

    updateIndicatorStyle();
    window.addEventListener("resize", updateIndicatorStyle);
    return () => {
      window.removeEventListener("resize", updateIndicatorStyle);
    };
  }, [activeId]);

  return (
    <ul ref={listRef} className="relative mb-auto grow">
      <div
        className="absolute left-0 w-full transition-all duration-300 rounded-xl"
        style={indicatorStyle}
      ></div>
      {userListItems.map((item) => (
        <UserMenuItem
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          onClick={() => setActiveId(item.id)}
        />
      ))}
    </ul>
  );
}

export default UserMenuList;
