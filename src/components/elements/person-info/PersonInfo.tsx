import { useAppDispatch, useAppSelector } from "@/hooks";
import { useContext, useEffect, useState } from "react";
import { setUserInfo } from "@/store/slices/userSlice";
import { useForm } from "react-hook-form";
import {
  ComponentFormEnum,
  IFormField,
  ModalState,
} from "@/types/types.interface";
import UserProfileCard from "../user-profile-card/UserProfileCard";
import Modal from "@/components/ui/modal/Modal";
import VerifyPersonInfo from "@/components/ui/verify-user-data/VerifyUserData";
import UpdatePersonInfoForm from "@/components/ui/change-user-data-form/ChangeUserDataForm";
import UserVerifiedData from "../user-verified-data/UserVerifiedData";
import { personInfoVerifiedTexts } from "@/const/const";
import { UserService } from "@/services/user.service";
import { AuthContext } from "@/hoc/AuthContext";
import { toServerDataMapping } from "@/utils/utils";
import { RootState } from "@/store/store";

const PersonInfo: React.FC = () => {
  const authContext = useContext(AuthContext);

  // Состояния для модальных окон
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: "update", // 'update' | 'verify'
    title: "",
    buttonText: "",
    field: {
      id: "",
      name: "",
      label: "",
      placeholder: "",
      type: "",
      componentType: ComponentFormEnum.INPUT,
    },
    verificationType: "email" as "email" | "phone",
  });

  const dispatch = useAppDispatch();
  const userInfo = {
    ...useAppSelector((state) => state.USER),
    organization: "ООО Велесъ",
  };

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const user = await UserService.getUserInfo();
        // console.log(user);

        dispatch(setUserInfo(user));
      } catch (error) {
        console.error("Error fetching user info:", error.message);
      }
    }

    fetchUserInfo();
  }, [dispatch]);

  const handleModalOpen = (
    type: "update" | "verify",
    title: string,
    buttonText: string,
    field?: IFormField,
    verificationType?: "email" | "phone"
  ) => {
    setModalState({
      isOpen: true,
      type,
      title,
      buttonText,
      field,
      verificationType,
    });

    if (verificationType) {
      verifyUserData();
    }
  };

  const closeModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const verifyUserData = async () => {
    setTimeout(() => {
      dispatch(setUserInfo({ ...userInfo, isVerified: true }));
      closeModal();
    }, 2000);
  };

  const user = useAppSelector((state) => {
    const { id, isAuth, ...userInfo } = state.USER;
    return userInfo;
  });
  // console.log(selectUserInfo);

  const handleModalSave = async (data: any, user) => {

    const adaptedTo

    // // Предположим, что data имеет структуру { keyName: "value" }, например { fullName: "John Doe" }
    // const keyName = Object.keys(data)[0]; // Получаем первый ключ из объекта data
    // const value = data[keyName]; // Получаем значение по этому ключу

    // // Получаем соответствующий ключ для сервера из toServerDataMapping
    // const serverKey = toServerDataMapping[keyName];

    // // Создаем объект для отправки на сервер
    // const updatedData = { [serverKey]: value };

    // const user = await UserService.updateUserInfo(data);
    // console.log(user);

    // dispatch(setUserInfo(user));
    // dispatch(
    //   setUserInfo({
    //     ...userInfo,
    //     [modalState.field?.name || ""]: data[modalState.field?.name || ""],
    //   })
    // );

    // closeModal();
    // methods.reset({});
  };

  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  if (!authContext) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <UserProfileCard
        userInfo={userInfo}
        openModal={(title, buttonText, field) =>
          handleModalOpen("update", title, buttonText, field)
        }
      />

      <UserVerifiedData
        title="Подтверидите вашу почту:"
        userInfo={userInfo}
        value={userInfo.email}
        handleButtonClick={() =>
          handleModalOpen(
            "verify",
            personInfoVerifiedTexts.email.modalTitle,
            personInfoVerifiedTexts.email.modalButtonText,
            undefined,
            "email"
          )
        }
      />

      <UserVerifiedData
        title="Подтверидите ваш телефон:"
        userInfo={userInfo}
        value={userInfo.phone}
        handleButtonClick={() =>
          handleModalOpen(
            "verify",
            personInfoVerifiedTexts.phone.modalTitle,
            personInfoVerifiedTexts.phone.modalButtonText,
            undefined,
            "phone"
          )
        }
      />

      {modalState.isOpen && (
        <Modal className="w-1/2 max-w-xl" onClose={closeModal}>
          {modalState.type === "verify" ? (
            <VerifyPersonInfo
              title={
                personInfoVerifiedTexts[modalState.verificationType || "email"]
                  .modalTitle
              }
              text={personInfoVerifiedTexts[
                modalState.verificationType || "email"
              ].verificationText(
                modalState.verificationType === "email"
                  ? userInfo.email
                  : userInfo.phone
              )}
              buttonText={
                personInfoVerifiedTexts[modalState.verificationType || "email"]
                  .modalButtonText
              }
              handleButtonClick={verifyUserData}
            />
          ) : (
            modalState.field && (
              <UpdatePersonInfoForm
                title={modalState.title}
                methods={methods}
                field={modalState.field}
                buttonText={modalState.buttonText}
                handleFormSave={(data) => handleModalSave(data)}
              />
            )
          )}
        </Modal>
      )}
    </div>
  );
};

export default PersonInfo;
