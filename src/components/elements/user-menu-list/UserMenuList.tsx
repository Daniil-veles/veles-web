"use client";

import { LOCAL_STORAGE_USER_MENU_CATEGORY, userListItems } from "@/const/const";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserMenuItem from "../user-menu-item/UserMenuItem";

function UserMenuList(): JSX.Element {
  const [activeId, setActiveId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const categoryFromLocalStorage = localStorage.getItem(
      LOCAL_STORAGE_USER_MENU_CATEGORY
    );

    const currentPath = router.pathname.split("/").pop();
    const finalCategory = currentPath || categoryFromLocalStorage || "profile";

    const activeItem = userListItems.find(
      (item) => item.link === finalCategory
    );

    if (activeItem) {
      setActiveId(activeItem.id);
    } else {
      setActiveId(userListItems[0].id);
    }

    localStorage.setItem(LOCAL_STORAGE_USER_MENU_CATEGORY, finalCategory);
  }, [router.pathname]);

  const handleChangeActive = (activeLink: string) => {
    router.push(`/${activeLink}`);
    localStorage.setItem(LOCAL_STORAGE_USER_MENU_CATEGORY, activeLink);

    const activeItem = userListItems.find((item) => item.link === activeLink);
    if (activeItem) {
      setActiveId(activeItem.id);
    }
  };

  return (
    <ul className="relative mb-auto grow">
      {userListItems.map((item) => (
        <UserMenuItem
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          onClick={() => handleChangeActive(item.link)}
        />
      ))}
    </ul>
  );
}

export default UserMenuList;
