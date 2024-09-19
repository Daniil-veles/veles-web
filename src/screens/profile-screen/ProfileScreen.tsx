import ProfileEmployeeList from "@/components/elements/profile-employee-list/ProfileEmployeeList";
import ProfileObjectList from "@/components/elements/profile-object-list/ProfileObjectList";
import ProfileTaskList from "@/components/elements/profile-task-list/ProfileTaskList";
import DashboardTab from "@/components/ui/dashboard-tab/DashboardTab";
import DashboardTitle from "@/components/ui/dashboard-title/DashboardTitle";
import ProfileScreenUserForm from "@/components/ui/profile-screen-user-form/ProfileScreenUserForm";
import {
  exampleEmployeeList,
  exampleObjectList,
  exampleTaskList,
} from "@/const/const";
import PrivateRoute from "@/hoc/PrivateRoute";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Settings } from "lucide-react";
import { useState } from "react";

const list = [
  { name: "оbject", title: "Объекты" },
  { name: "task", title: "Задачи" },
  { name: "department", title: "Отдел" },
];

const ProfileScreen: React.FC = () => {
  const [activeItem, setActiveItem] = useState(list[0].name);

  return (
    // <PrivateRoute>
    <DashboardLayout
      title="Личный кабинет"
      description="Это главная страница сайта"
    >
      <div className="h-full flex flex-col">
        <header className="flex justify-between mb-2 pl-2">
          <DashboardTitle title="Профиль" />

          <div className="w-10 h-10 flex justify-center items-center bg-white rounded-xl">
            <Settings size={18} />
          </div>
        </header>

        <div className="flex grow gap-x-[30px]">
          <ProfileScreenUserForm />

          <div className="w-full h-full grid-row-[200px_1fr] flex flex-col">
            <div className="mb-6">
              <DashboardTab
                list={list}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </div>

            {activeItem === "оbject" && (
              <ProfileObjectList list={exampleObjectList} />
            )}
            {activeItem === "task" && (
              <ProfileTaskList list={exampleTaskList} />
            )}
            {activeItem === "department" && (
              <ProfileEmployeeList list={exampleEmployeeList} />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
    // </PrivateRoute>
  );
};

export default ProfileScreen;
