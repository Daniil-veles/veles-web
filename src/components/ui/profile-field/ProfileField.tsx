import ChangerData from "../changer-data/ChangerData";

interface ProfileFieldProps {
  label: string;
  value: string;
  onEditClick?: () => void;
  isEditable?: boolean
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  label,
  value,
  onEditClick,
  isEditable,
}) => (
  <div className="flex gap-5 items-center h-8 mb-3">
    <p className="text-gray-500 min-w-[160px]">{label}</p>
    <ChangerData value={value} onEditClick={onEditClick} isEditable={isEditable} />
  </div>
);

export default ProfileField;