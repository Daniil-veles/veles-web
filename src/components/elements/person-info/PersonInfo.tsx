import { useAppDispatch, useAppSelector } from "@/hooks";
import { useContext, useEffect, useMemo, useState } from "react";
import { setUserInfo } from "@/store/slices/userSlice";
import { useForm } from "react-hook-form";
import UserProfileCard from "../user-profile-card/UserProfileCard";
import Modal from "@/components/ui/modal/Modal";
import VerifyPersonInfo from "@/components/ui/verify-user-data/VerifyUserData";
import UserVerifiedData from "../user-verified-data/UserVerifiedData";
import { personInfoVerifiedTexts } from "@/const/const";
import { UserService } from "@/services/user.service";
import { adaptToUserData } from "@/utils/utils";
import { AuthContext } from "@/provider/AuthContext";
import { ComponentFormEnum, IFormField } from "@/types/form.interface";
import { ModalState } from "@/types/common.interface";
import { AuthorizationStatus } from "@/types/state.interface";
import ModalUpdateInfoForm from "@/components/ui/modal-update-info-form/ModalUpdateInfoForm";

const PersonInfo: React.FC = () => {
  const authContext = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.USER);

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

  // useEffect(() => {
  //   async function fetchUserInfo() {
  //     try {
  //       // const user = await UserService.getUserInfo();
  //       // console.log(user);

  //       const user = {
  //         id: null,
  //         email: "test@mail.ru",
  //         fullName: "Даниил Суворов",
  //         birthDate: "21.10.2000",
  //         phone: "+79807057002",
  //         isActive: false,
  //         isSuperuser: false,
  //         isVerified: false,
  //         picture: "",
  //         isAuth: AuthorizationStatus.Auth,
  //       };

  //       dispatch(setUserInfo(user));
  //     } catch (error) {
  //       console.error("Error fetching user info:", error.message);
  //     }
  //   }

  //   fetchUserInfo();
  // }, [dispatch]);

  const userInfo = useMemo(
    () => ({
      ...userState,
      organization: "ООО Велесъ",
    }),
    [userState]
  );

  const { id, isAuth, ...userInfoToServer } = userInfo;

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

  const handleModalSave = async (data: any, userInfo) => {
    const adaptedData = {
      email: userInfo.email,
      password: userInfo.password ?? "dbhsbdS1",
      full_name: userInfo.fullName,
      birth_date: userInfo.birthDate,
      phone: userInfo.phone,
      picture: userInfo.picture,
      is_active: true,
      is_superuser: false,
      is_verified: false,
    };

    // Создаем объект для отправки на сервер
    const response = await UserService.updateUserInfo(adaptedData);
    const adaptedResponse = adaptToUserData(response);
    dispatch(setUserInfo(adaptedResponse));
    console.log(adaptedResponse);

    closeModal();
    methods.reset({});
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
              <ModalUpdateInfoForm
                title={modalState.title}
                methods={methods}
                field={modalState.field}
                buttonText={modalState.buttonText}
                handleFormSave={(data) =>
                  handleModalSave(data, userInfoToServer)
                }
              />
            )
          )}
        </Modal>
      )}
    </div>
  );
};

export default PersonInfo;
