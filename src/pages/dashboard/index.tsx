import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: "dashboard/profile",
      permanent: false,
    },
  };
};

const DashboardRedirect: React.FC = () => {
  return null;
};

export default DashboardRedirect;
