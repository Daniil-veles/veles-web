// import './UserMenuList.scss';
"use client";

import {
  LOCAL_STORAGE_USER_MENU_CATEGORY,
  userListItems,
} from "@/const/const";
import { getIndicatorStyle } from "@/utils/utils";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import UserMenuItem from "../user-menu-item/UserMenuItem";
import { useSearchParams } from "next/navigation";

function UserMenuList(): JSX.Element {
  const [activeId, setActiveId] = useState<number>(userListItems[0].id);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  useEffect(() => {
    const categoryFromLocalStorage = localStorage.getItem(
      LOCAL_STORAGE_USER_MENU_CATEGORY
    );
    const finalCategory =
      categoryFromUrl || categoryFromLocalStorage || "organization";

    if (categoryFromUrl !== finalCategory) {
      router.replace(`/user?category=${finalCategory}`);
    } else {
      localStorage.setItem(LOCAL_STORAGE_USER_MENU_CATEGORY, finalCategory);
    }

    const activeItem = userListItems.find(
      (item) => item.link === finalCategory
    );
    if (activeItem) {
      setActiveId(activeItem.id);
      updateIndicatorStyle();
    } else {
      setActiveId(userListItems[0].id);
    }
  }, [categoryFromUrl, router]);

  const updateIndicatorStyle = () => {
    if (listRef.current) {
      const activeItem = listRef.current.querySelector(".active");
      if (activeItem) {
        const style = getIndicatorStyle(
          activeItem as HTMLElement,
          listRef.current
        );
        setIndicatorStyle(style);
      }
    }
  };

  useEffect(() => {
    if (activeId !== null) {
      updateIndicatorStyle();
    }

    const handleResize = () => requestAnimationFrame(updateIndicatorStyle);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeId]);

  const handleChangeActive = (activeLink: string) => {
    router.push(`/user?category=${activeLink}`);
    localStorage.setItem(LOCAL_STORAGE_USER_MENU_CATEGORY, activeLink);

    const activeItem = userListItems.find((item) => item.link === activeLink);
    if (activeItem) {
      setActiveId(activeItem.id);
    }
  };

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
          onClick={() => handleChangeActive(item.link)}
        />
      ))}
    </ul>
  );
}

export default UserMenuList;
