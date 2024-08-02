import About from "@/components/elements/about/About";
import Faq from "@/components/elements/faq/Faq";
import Features from "@/components/elements/features/Features";
import Footer from "@/components/elements/footer/Footer";
import Rate from "@/components/elements/rate/Rate";
// import Reviews from "@/components/blocks/reviews/Reviews";
import Layout from "@/layouts/Layout";

const MainScreen: React.FC = () => {
  return (
    <>
      <Layout title="Главная страница" description="Это главная страница сайта">
        <About />
        <Features />
        <Rate />
        {/* <Reviews /> */}
        <Faq />
        <Footer />
      </Layout>
    </>
  );
};

export default MainScreen;
