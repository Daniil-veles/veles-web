import styles from "./Loading.module.scss"; // Импортируем стили как CSS-модуль
import Container from "@/components/container/Container";
import Layout from "@/layouts/Layout";

const Loading: React.FC = () => {
  return (
    <Layout title="Авторизация" description="Это главная страница сайта">
      <Container className="">
        <div className={styles.loader}>
          <h1 className={styles.loaderText}>
            Loading
            <div className="flex mb-1">
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          </h1>
        </div>
      </Container>
    </Layout>
  );
};

export default Loading;
