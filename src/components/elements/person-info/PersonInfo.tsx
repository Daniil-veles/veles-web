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

const PersonInfo: React.FC = () => {
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

  // Верификация почты
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function verifyUserEmail() {
    try {
      // Иммитация запроса
      setTimeout(() => {
        dispatch(setUserInfo({ isVerified: true }));
      }, 2000);

      // setIsVerified(true);

      // TODO:
      // const response = await UserService.verifyUserEmail();

      // if (response.status == 200) {
      //   console.log("User created successfully:", response.data);
      // }
    } catch (error) {
      console.error("Failed to verified user:", error.response);
    }
  }

  const handleVerifiedEmail = () => {
    setIsModalOpen(true);
    verifyUserEmail();
  };

  // Изменить Личные данные
  const [modalState, setModalState] = useState<ModalState>({
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

  const openModal = (title: string, buttonText: string, field: IFormField) => {
    setModalState({
      isOpen: true,
      title,
      buttonText,
      field,
    });
  };

  const closeModal = () => {
    setModalState({
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
        [modalState.field.name]: data[modalState.field.name],
      })
    );

    closeModal();
    methods.reset({});
  };

  //   console.log(userInfo);

  // Hook форма.
  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const text = (
    <>
      Для завершения регистрации и доступа ко всем функциям нашего сервиса,
      пожалуйста, подтвердите вашу электронную почту. На указанный адрес:
      <b>&nbsp;{userInfo.email}&nbsp;</b> было отправлено письмо с инструкциями
      по подтверждению.
      <br />
      Если вы не получили письмо, проверьте папку "Спам" или нажмите кнопку
      ниже, чтобы отправить письмо повторно.
    </>
  );

  return (
    <div className="">
      <UserProfileCard userInfo={userInfo} openModal={openModal} />
      <UserVerifiedData
        title="Подтверидите вашу почту:"
        userInfo={userInfo}
        value={userInfo.email}
        handleVerifiedEmail={handleVerifiedEmail}
      />

      {/* Подтверждение почты */}
      {isModalOpen && !userInfo.isVerified ? (
        <Modal className="w-1/2 max-w-xl" onClose={() => setIsModalOpen(false)}>
          <VerifyPersonInfo
            title="Подтвердите вашу почту"
            text={text}
            buttonText="Отправить письмо повторно"
            handleButtonClick={handleVerifiedEmail}
          />
        </Modal>
      ) : null}

      {/* Редактировать данные */}
      {modalState.isOpen ? (
        <Modal className="w-1/2 max-w-xl" onClose={closeModal}>
          <UpdatePersonInfoForm
            title={modalState.title}
            methods={methods}
            field={modalState.field}
            buttonText={modalState.buttonText}
            handleFormSave={methods.handleSubmit(handleModalSave)}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default PersonInfo;
