import Container from "@/components/container/Container";
import CustomButton from "@/components/ui/custom-button/CustomButton";
import { MoveRight } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-blue-50">
      <Container className="grid grid-cols-[46%_1fr] py-10">
        <div className="pt-24 pl-30">
          <h2 className="mb-8 text-4xl">
            <span className="text-blue-800">
              <b>Plan</b>
              &nbsp;and&nbsp;
              <b>manage</b>
            </span>
          </h2>

          <p
            className="
            mb-12
          text-blue-800
          "
          >
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata. Solum patrioque no sea. Mea ex malis mollis
            oporteat. Eum an expetenda consequat.
          </p>

          <CustomButton
            className="bg-blue-500 text-white px-3 py-2"
            onClick={() => console.log()}
          >
            <span className="flex align-center">
              Узнать больше
              <MoveRight className="w-5 h-auto ml-2" size={10} />
            </span>
          </CustomButton>
        </div>

        <div className="h-auto overflow-hidden">
          <img src="./about-img.svg" alt="" className="clip-inset-0_0_10%_0" />
        </div>
      </Container>
    </div>
  );
};

export default About;
