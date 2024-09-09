import HeaderMenu from "@/components/elements/header-menu/HeaderMenu";
import Container from "@/components/container/Container";
import ButtonLittle from "@/components/ui/custom-button/button-little/ButtonLittle";

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-4 pt-8 pb-6">
        <img src="" alt="" className="w-24 h-8 mr-10" />

        <HeaderMenu />

        <div className="flex items-center">
          <ButtonLittle
            onClick={() => console.log("Clicked")}
          >
            Регистрация
          </ButtonLittle>
        </div>
      </div>

      <p className="">Copyright © 2018 by Random site</p>
    </Container>
  );
};

export default Footer;
