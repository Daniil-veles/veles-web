import { iconMap } from "@/const/const";

function UserMenuItem({ iconName, text }): JSX.Element {
  const IconComponent = iconMap[iconName];
  return (
    <li className="flex items-center p-2 py-3 mb-4 bg-black/5 rounded-xl duration-300 transition-colors">
      <IconComponent className="mr-2" size={24} />{" "}
      {text}
    </li>
  );
}

export default UserMenuItem;
