import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/auth/login',
      permanent: false,
    },
  };
};

const AuthRedirect: React.FC = () => {
  return null;
};

export default AuthRedirect;
