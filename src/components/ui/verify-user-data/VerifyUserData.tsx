interface IVerifyUserData {
  title: string;
  text?: string | React.ReactNode;
  buttonText?: string;
  handleButtonClick?: () => void;
}

const VerifyUserData: React.FC<IVerifyUserData> = ({
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
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default VerifyUserData;
