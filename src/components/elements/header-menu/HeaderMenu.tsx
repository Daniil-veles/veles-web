import { menu } from "@/const/const";
import HeaderMenuItem from "../header-menu-item/HeaderMenuItem";
import { useState } from "react";

const HeaderMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="flex flex-start flex-grow">
      {menu
        ? menu.map((item) => (
            <HeaderMenuItem
              key={item.id}
              value={item}
              isActive={activeItem === item.link}
              onClick={() => handleItemClick(item.link)}
            />
          ))
        : ""}
    </ul>
  );
};

export default HeaderMenu;
