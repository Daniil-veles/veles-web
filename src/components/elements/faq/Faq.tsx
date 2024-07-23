import Container from "@/components/container/Container";
import styles from "./Faq.module.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomButton from "@/components/ui/custom-button/CustomButton";

const Faq: React.FC = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.customContainer}>
        <h2 className="mb-7 text-center">Frequently asked questions</h2>

        <div className="max-w-3xl m-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </p>

                <CustomButton className={styles.button}>
                  Перейти к документации
                </CustomButton>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>

              <AccordionContent>
                <p className="mb-4">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </p>

                <CustomButton className={styles.button}>
                  Перейти к документации
                </CustomButton>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </p>

                <CustomButton className={styles.button}>
                  Перейти к документации
                </CustomButton>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </p>

                <CustomButton className={styles.button}>
                  Перейти к документации
                </CustomButton>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </p>

                <CustomButton className={styles.button}>
                  Перейти к документации
                </CustomButton>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
