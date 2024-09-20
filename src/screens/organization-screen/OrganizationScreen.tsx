import DashboardTitle from "@/components/ui/dashboard-title/DashboardTitle";
import OrganizationScreenForm from "@/components/ui/organization-screen-form/OrganizationScreenForm";
import PrivateRoute from "@/hoc/PrivateRoute";
import DashboardLayout from "@/layouts/DashboardLayout";

const OrganizationScreen: React.FC = () => {
  return (
    // <PrivateRoute>
    <DashboardLayout
      title="Личный кабинет"
      description="Это главная страница сайта"
    >
      <div className="h-full flex flex-col">
        <header className="flex justify-between items-center mb-2 pl-2">
          <DashboardTitle title="Организация" />

          {/* <div className="w-10 h-10 flex justify-center items-center bg-white rounded-xl">
            <Settings size={18} />
          </div> */}
        </header>

        <div className="flex grow gap-x-[30px]">
          <div className="flex w-[265px] bg-white rounded-3xl pt-4 px-6 pb-4 flex-shrink-0">
            <p>Блок</p>
          </div>

          <div className="flex flex-col w-full">
            <div className="h-10">
              <h3>ЧТо-то</h3>
            </div>

            <OrganizationScreenForm />
          </div>

          {/* <UserMenu /> */}
          {/* <Organization /> */}
        </div>
      </div>
    </DashboardLayout>
    // </PrivateRoute>
  );
};

export default OrganizationScreen;
