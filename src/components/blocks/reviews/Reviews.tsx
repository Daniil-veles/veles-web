import styles from "./Reviews.module.scss";
import React from "react";
import Container from "@/components/container/Container";
import { Carousel } from "@/MTailwind";

const Reviews: React.FC = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.customContainer}>
        <div className="flex">
          <div className={styles.content}>
            <h2 className={styles.title}>Customers's quotes</h2>

            <p className={styles.text}>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
              Usu atqui laudem an.
            </p>
          </div>

          <Carousel className="rounded-xl">
            <div>
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </div>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
