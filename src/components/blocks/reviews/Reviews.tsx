import Container from "@/components/container/Container";
import styles from "./Reviews.module.scss";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Reviews: React.FC = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.customContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>Customers's quotes</h2>

          <p className={styles.text}>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an.
          </p>
        </div>

        <div className={styles.slider}>
          <Carousel>
            <CarouselContent>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
