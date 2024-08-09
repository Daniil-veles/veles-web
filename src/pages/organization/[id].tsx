// import styles from './[id].module.scss';

import Container from "@/components/container/Container";
import UserMenu from "@/components/elements/user-meu/UserMenu";
import { Layout } from "lucide-react";

const Example: React.FC = () => {
  return (
    <div>
      <p>Личный кабинет</p>
    </div>
    // <Layout title="Личный кабинет" description="Это главная страница сайта">
    //   <Container className="flex flex-col flex-grow">
    //     <div className="flex-grow grid grid-cols-[max-content_1fr] gap-10">
    //       {/* <UserMenu /> */}

    //       {/* <div className="">{renderContent()}</div> */}
    //       <div className="">{'Пример'}</div>
    //     </div>
    //   </Container>
    // </Layout>
  );
};

export default Example;
