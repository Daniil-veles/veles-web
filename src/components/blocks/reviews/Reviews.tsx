import styles from "./Reviews.module.scss";
import React from "react";
import Container from "@/components/container/Container";
import { Carousel } from "@/components/ui/carousel";


const Reviews: React.FC = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.customContainer}>
        <div className="flex">
          <div className={styles.content}>
            <h2 className={styles.title}>Customers quotes</h2>

            <p className={styles.text}>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
              Usu atqui laudem an.
            </p>
          </div>

          {/* <Carousel> */}
            {/* <CarouselContent> */}
              {/* <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem> */}
            {/* </CarouselContent> */}
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          {/* </Carousel> */}
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
