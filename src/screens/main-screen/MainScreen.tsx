import About from "@/components/elements/about/About";
import Faq from "@/components/elements/faq/Faq";
import Features from "@/components/elements/features/Features";
import Footer from "@/components/elements/footer/Footer";
import Header from "@/components/elements/header/Header";
import Rate from "@/components/elements/rate/Rate";
// import Reviews from "@/components/blocks/reviews/Reviews";
import Layout from "@/layouts/Layout";

const MainScreen: React.FC = () => {
  return (
    <>
      <Layout title="Главная страница" description="Это главная страница сайта">
        <Header />

        <div id="about">
          <About />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="rate">
          <Rate />
        </div>
        {/* <div id="reviews">
          <Reviews />
        </div> */}
        <div id="faq">
          <Faq />
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default MainScreen;
