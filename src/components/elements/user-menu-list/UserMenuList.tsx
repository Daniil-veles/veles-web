// import './UserMenuList.scss';
"use client";

import { userListItems } from "@/const/const";
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
  const category = searchParams.get("category");
  console.log(category);
  

  useEffect(() => {
    if (!category) {
      router.replace("/user?category=organization");
    }
  }, [category, router]);

  useEffect(() => {
    // Установить активный ID на основе параметра category
    const activeItem = userListItems.find((item) => item.link === category);
    if (activeItem) {
      setActiveId(activeItem.id);
    } else {
      setActiveId(userListItems[0].id);
    }
  }, [category]);

  useEffect(() => {
    const updateIndicatorStyle = () => {
      if (listRef.current) {
        const activeItem = listRef.current.querySelector(".active");
        if (activeItem) {
          setIndicatorStyle(
            getIndicatorStyle(activeItem as HTMLElement, listRef.current)
          );
        }
      }
    };

    const handleResize = () => requestAnimationFrame(updateIndicatorStyle);

    updateIndicatorStyle();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeId]);

  const handleChangeActive = (activeLink: string) => {
    router.push(`/user?category=${activeLink}`);
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
