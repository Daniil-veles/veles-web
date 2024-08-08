import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
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

const PersonInfo: React.FC = () => {
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

  //   console.log(modalState);

  const dispatch = useAppDispatch();
  const userInfo = {
    ...useAppSelector((state) => state.USER),
    organization: "ООО Велесъ",
  };

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        // Фейковые данные для примера
        const user = {
          id: 1,
          email: "john.doe@example.com",
          fullName: "John Doe",
          birthDate: "1990-01-01",
          phone: "+1234567890",
          isActive: true,
          isSuperuser: true,
          isVerified: false,
          picture: "https://example.com/picture.jpg",
          isAuth: "AUTHENTICATED",
          organization: "ООО Велесъ",
        };

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

  const handleModalSave = (data: any) => {
    dispatch(
      setUserInfo({
        ...userInfo,
        [modalState.field?.name || ""]: data[modalState.field?.name || ""],
      })
    );

    closeModal();
    methods.reset({});
  };

  const verifyUserData = async () => {
    setTimeout(() => {
      dispatch(setUserInfo({ ...userInfo, isVerified: true }));
      closeModal();
    }, 2000);
  };

  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
  });

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
            <UpdatePersonInfoForm
              title={modalState.title}
              methods={methods}
              field={modalState.field}
              buttonText={modalState.buttonText}
              handleFormSave={methods.handleSubmit(handleModalSave)}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default PersonInfo;
