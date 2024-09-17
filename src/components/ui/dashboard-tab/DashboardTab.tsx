import cn from "classnames";

interface IDashboardTabProps {
  list: { name: string; title: string }[];
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const DashboardTab: React.FC<IDashboardTabProps> = ({
  list,
  activeItem,
  setActiveItem,
}) => {
  return (
    <ul className="max-w-max flex bg-c-gray-500 p-1 rounded-full">
      {list
        ? list.map((item, index) => (
            <li
              onClick={() => setActiveItem(item.name)}
              key={`${item.name}-${index}`}
              className={cn(
                "py-2 px-10 rounded-full",
                item.name === activeItem
                  ? "bg-c-blue-500 text-white"
                  : "bg-transparent"
              )}
            >
              {item.title}
            </li>
          ))
        : null}
    </ul>
  );
};

export default DashboardTab;
