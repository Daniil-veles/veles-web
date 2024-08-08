// import styles from './PersonInfo.module.scss';

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
  // Обновляет Личные данные
  const [updateModalState, setUpdateModalState] = useState<ModalState>({
    isOpen: false,
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
  });

  // Верификация почты
  const [verifyModalState, setVerifyModalState] = useState<{
    isOpen: boolean;
    verificationType: "email" | "phone";
  }>({
    isOpen: false,
    verificationType: "email",
  });

  const dispatch = useAppDispatch();
  const userInfo = {
    ...useAppSelector((state) => state.USER),
    organization: "ООО Велесъ",
  };

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        // const response: UserServerData = await UserService.getUserInfo();
        // const userInfo = adaptToUserData(response);
        // console.log(userInfo);

        const user = {
          id: 1, // Уникальный идентификатор пользователя
          email: "john.doe@example.com", // Email пользователя
          fullName: "John Doe", // Полное имя пользователя
          birthDate: "1990-01-01", // Дата рождения пользователя
          phone: "+1234567890", // Номер телефона пользователя
          isActive: true, // Статус активности пользователя
          isSuperuser: true, // Статус суперпользователя
          isVerified: false, // Статус верификации пользователя
          picture: "https://example.com/picture.jpg", // Ссылка на фото пользователя
          isAuth: "AUTHENTICATED", // Статус аутентификации пользователя
          organization: "ООО Велесъ", // Статус аутентификации пользователя
        };

        // Обновляет данные пользователя в сторе
        dispatch(setUserInfo(user));

        // dispatch(setUserInfo(userInfo));
      } catch (error) {
        console.error("Error fetching user info:", error.message);
      }
    }

    fetchUserInfo();
  }, [dispatch]);

  const handleVerification = (type: "email" | "phone") => {
    setVerifyModalState({
      isOpen: true,
      verificationType: type,
    });

    verifyUserData();
  };

  const verifyUserData = async () => {
    setTimeout(() => {
      // Логика для подтверждения данных
      dispatch(setUserInfo({ ...userInfo, isVerified: true }));
    }, 2000);
  };

  const openModal = (title: string, buttonText: string, field: IFormField) => {
    setUpdateModalState({
      isOpen: true,
      title,
      buttonText,
      field,
    });
  };

  const closeModal = () => {
    setUpdateModalState({
      isOpen: false,
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
    });
  };

  const handleModalSave = (data: any) => {
    console.log(data);

    dispatch(
      setUserInfo({
        ...userInfo,
        [updateModalState.field.name]: data[updateModalState.field.name],
      })
    );

    closeModal();
    methods.reset({});
  };

  // Hook форма.
  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  return (
    <div className="">
      <UserProfileCard userInfo={userInfo} openModal={openModal} />

      <UserVerifiedData
        title="Подтверидите вашу почту:"
        userInfo={userInfo}
        value={userInfo.email}
        handleButtonClick={() => handleVerification("email")}
      />

      <UserVerifiedData
        title="Подтверидите ваш телефон:"
        userInfo={userInfo}
        value={userInfo.phone}
        handleButtonClick={() => handleVerification("phone")}
      />

      {/* Подтверждение почты */}
      {verifyModalState.isOpen && !userInfo.isVerified ? (
        <Modal
          className="w-1/2 max-w-xl"
          onClose={() =>
            setVerifyModalState({
              isOpen: false,
              verificationType: verifyModalState.verificationType,
            })
          }
        >
          <VerifyPersonInfo
            title={
              personInfoVerifiedTexts[verifyModalState.verificationType]
                .modalTitle
            }
            text={personInfoVerifiedTexts[
              verifyModalState.verificationType
            ].verificationText(
              verifyModalState.verificationType === "email"
                ? userInfo.email
                : userInfo.phone
            )}
            buttonText={
              personInfoVerifiedTexts[verifyModalState.verificationType]
                .modalButtonText
            }
            handleButtonClick={verifyUserData}
          />
        </Modal>
      ) : null}

      {/* Обновляет данные пользователя */}
      {updateModalState.isOpen ? (
        <Modal className="w-1/2 max-w-xl" onClose={closeModal}>
          <UpdatePersonInfoForm
            title={updateModalState.title}
            methods={methods}
            field={updateModalState.field}
            buttonText={updateModalState.buttonText}
            handleFormSave={methods.handleSubmit(handleModalSave)}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default PersonInfo;
