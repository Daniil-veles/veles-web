interface IScreenTitleProp {
  className?: string;
  title: string;
}

const ScreenTitle: React.FC<IScreenTitleProp> = ({ className, title }) => {
  return <h2 className={`${className} text-xl font-medium`}>{title}</h2>;
};

export default ScreenTitle;
