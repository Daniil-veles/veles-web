import HeaderMenu from "@/components/elements/header-menu/HeaderMenu";
import Container from "@/components/container/Container";
import CustomButton from "@/components/ui/custom-button/CustomButton";

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-4 pt-8 pb-6">
        <img src="" alt="" className="w-[100px] h-[30px] mr-10" />

        <HeaderMenu />

        <div className="flex items-center">
          <CustomButton
            className="bg-bg-fourth text-c-first px-4 py-2"
            onClick={() => console.log("Clicked")}
          >
            Регистрация
          </CustomButton>
        </div>
      </div>

      <p className="">Copyright © 2018 by Random site</p>
    </Container>
  );
};

export default Footer;
