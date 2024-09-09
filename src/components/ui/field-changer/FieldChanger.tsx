interface FieldChangerProps {
  className: string;
  children: React.ReactNode;
}

const FieldChanger: React.FC<FieldChangerProps> = ({
  className,
  children,
}) => <div className={className}>{children}</div>;

export default FieldChanger;
