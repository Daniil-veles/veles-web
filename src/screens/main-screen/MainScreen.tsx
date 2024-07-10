import About from "@/components/blocks/about/About";
import Faq from "@/components/blocks/faq/Faq";
import Features from "@/components/blocks/features/Features";
import Rate from "@/components/blocks/rate/Rate";
import Reviews from "@/components/blocks/reviews/Reviews";
import Layout from "@/layouts/Layout";

const MainScreen: React.FC = () => {
  return (
    <>
      <Layout title="Главная страница" description="Это главная страница сайта">
        <About />
        <Features />
        <Rate />
        <Reviews />
        <Faq />
      </Layout>
    </>
  );
};

export default MainScreen;
