import styles from "./Reviews.module.scss";
import React, { useCallback, useEffect } from "react";
import Container from "@/components/container/Container";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import "embla-carousel-class-names";
import { carousel } from "@/const/const";

const Reviews: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    skipSnaps: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className={styles.container}>
      <Container className={styles.customContainer}>
        <div className={styles.content}>
          <h2 className="mb-5 text-second">Customers quotes</h2>

          <p className="">
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an.
          </p>
        </div>

        <div className={styles.slider} ref={emblaRef}>
          <div className={styles.sliderContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className={styles.slide}>
                <div
                  className={`${styles.slideCover} ${
                    selectedIndex !== index
                      ? styles["slideCover--unActive"]
                      : ""
                  }`}
                ></div>
                <Card
                  className={`${styles.card} ${
                    selectedIndex === index ? styles["card--active"] : ""
                  }`}
                >
                  <CardContent className="flex justify-center p-6">
                    <p className="">{carousel[index].text}</p>
                  </CardContent>

                  <img className={styles.img} src="" alt="" />
                </Card>
              </div>
            ))}
          </div>

          <div className={styles.dots}>
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  selectedIndex === index ? styles["dot--selected"] : ""
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
