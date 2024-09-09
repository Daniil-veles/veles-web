import UserMenu from "@/components/elements/user-meu/UserMenu";
import Layout from "./Layout";
import DashboardHeader from "@/components/elements/dashboard-header/DashboardHeader";

interface IDashboardLayout {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayout> = ({
  title,
  description,
  children,
}) => {
  return (
    <Layout title={title} description={description}>
      <div className="h-full grid grid-cols-[200px_1fr] gap-x-[30px]">
        <UserMenu />

        <div>
          <DashboardHeader />

          {children}
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
