// import './UserMenuList.scss';
"use client";

import { userListItems } from "@/const/const";
import { getIndicatorStyle } from "@/utils/utils";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import UserMenuItem from "../user-menu-item/UserMenuItem";

function getCategoryLinkByUserMenu(activeId: number) {
  const categoryName =
    userListItems.find((item) => item.id === activeId)?.text || "";
  const category =
    {
      Организация: "organization",
      Сотрудники: "employee",
      "Тарифный план": "tariff",
      Настройки: "settings",
    }[categoryName] || "";

  return `/user?category=${category}`;
}

function UserMenuList(): JSX.Element {
  const [activeId, setActiveId] = useState<number>(userListItems[0].id);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  useEffect(() => {
    const updateIndicatorStyle = () => {
      if (listRef.current) {
        const activeItem = listRef.current?.querySelector(".active");
        if (activeItem) {
          setIndicatorStyle(
            getIndicatorStyle(activeItem as HTMLElement, listRef.current)
          );
        }
      }
    };

    updateIndicatorStyle();
    window.addEventListener("resize", updateIndicatorStyle);
    return () => {
      window.removeEventListener("resize", updateIndicatorStyle);
    };
  }, [activeId]);

  useEffect(() => {
    const link = getCategoryLinkByUserMenu(activeId);
    // Обновляем URL только если он отличается от текущего
    if (link && link !== router.asPath) {
      router.push(link, undefined, { shallow: true }).catch((error) => {
        console.error("Error navigating:", error);
      });
    }
  }, [activeId, router]);

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
