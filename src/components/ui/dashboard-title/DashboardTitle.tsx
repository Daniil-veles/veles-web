interface IScreenTitleProp {
  className?: string;
  title: string;
}

const DashboardTitle: React.FC<IScreenTitleProp> = ({ className, title }) => {
  return <h2 className={`${className} text-3xl font-medium`}>{title}</h2>;
};

export default DashboardTitle;
