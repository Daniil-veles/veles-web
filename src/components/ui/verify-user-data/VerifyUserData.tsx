import ButtonLittle from "../custom-button/button-little/ButtonLittle";

interface IVerifyPersonInfo {
  title: string;
  text?: string | React.ReactNode;
  buttonText?: string;
  handleButtonClick?: () => void;
}

const VerifyPersonInfo: React.FC<IVerifyPersonInfo> = ({
  title,
  text,
  buttonText,
  handleButtonClick,
}) => {
  return (
    <div className="">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="mb-4">{text}</p>

      {buttonText ? (
        <div className="mt-6 flex justify-center">
          <ButtonLittle>
            {buttonText}
          </ButtonLittle>
        </div>
      ) : null}
    </div>
  );
};

export default VerifyPersonInfo;
