import PersonInfo from "@/components/elements/person-info/PersonInfo";
import PrivateRoute from "@/hoc/PrivateRoute";
import DashboardLayout from "@/layouts/DashboardLayout";

const ProfileScreen: React.FC = () => {
  

  return (
    <PrivateRoute>
      <DashboardLayout
        title="Личный кабинет"
        description="Это главная страница сайта"
      >
        <div className="grow grid grid-cols-[max-content_1fr] gap-10">
          <PersonInfo />
        </div>
      </DashboardLayout>
    </PrivateRoute>
  );
};

export default ProfileScreen;
