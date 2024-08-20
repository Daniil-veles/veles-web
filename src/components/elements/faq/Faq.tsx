import Container from "@/components/container/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ButtonLittle from "@/components/ui/custom-button/button-little/ButtonLittle";
import { MoveRight } from "lucide-react";

const accordionItems = [
  {
    triggerText: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    triggerText: "Is it styled?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    triggerText: "Is it animated?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    triggerText: "Is it animated?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    triggerText: "Is it animated?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

const Faq: React.FC = () => {
  return (
    <div className="">
      <Container className="py-24">
        <h2 className="mb-7 text-center">Frequently asked questions</h2>

        <div className="max-w-4xl m-auto">
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={`${item.triggerText}-${index}`}
                value={`item-${index}`}
              >
                <AccordionTrigger>{item.triggerText}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">{item.content}</p>

                  <ButtonLittle variant={"minimal"}>
                    Перейти к документации

                    <MoveRight className="ml-1" size={16} />
                  </ButtonLittle>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
