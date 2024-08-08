// import styles from './OrganizationInfo.module.scss';

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  PlusCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { UserServerData } from "@/types/user.interface";
import { UserService } from "@/services/user.service";
import { adaptToUserData } from "@/utils/utils";
import { setUserInfo } from "@/store/slices/userSlice";
import ChangerData from "@/components/ui/changer-data/ChangerData";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal/Modal";
import FormField from "@/components/ui/form-field/FormField";
import { ComponentFormEnum } from "@/types/types.interface";
import { FormProvider, useForm } from "react-hook-form";
import VerifyUserData from "@/components/ui/verify-user-data/VerifyUserData";
import ChangeUserDataForm from "@/components/ui/change-user-data-form/ChangeUserDataForm";
import ProfileField from "@/components/ui/profile-field/ProfileField";

// Интерфейсы для состояния поля и модального окна
export interface FieldState {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
  componentType: ComponentFormEnum;
}

interface ModalState {
  isOpen: boolean;
  title: string;
  buttonText: string;
  field: FieldState;
}

const UserProfileCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.USER);
  const userInfoFull = { ...userInfo, organization: "ООО Велесъ" };

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

  const openModal = (
    title: string,
    buttonText: string,
    field: Partial<FieldState>
  ) => {
    setModalState({
      isOpen: true,
      title,
      buttonText,
      field: {
        id: field.id || "",
        name: field.name || "",
        label: field.label || "",
        placeholder: field.placeholder || "",
        type: field.type || "",
        componentType: field.componentType || ComponentFormEnum.INPUT,
      },
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

  console.log(userInfo);

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
    <>
      <div className="">
        <div className="rounded-md border border-zinc-50 shadow p-4 px-6">
          <img
            src=""
            alt=""
            className="w-[160px] h-[160px] aspect-square rounded-full mb-6"
          />

          <h2 className="flex items-center text-2xl mb-4">Личные данные</h2>

          {userInfo.id ? (
            <div className="">
              <ProfileField
                label="ФИО"
                value={userInfo.fullName}
                onEditClick={() =>
                  openModal("Изменить ФИО", "Сохранить", {
                    id: "fullName",
                    name: "fullName",
                    placeholder: "Введите полное имя",
                    type: "text",
                  })
                }
              />

              <ProfileField
                label="Почта"
                value={userInfo.email}
                onEditClick={() =>
                  openModal("Изменить почту", "Отправить", {
                    id: "email",
                    name: "email",
                    placeholder: "Введите почту",
                    type: "text",
                  })
                }
              />

              <ProfileField
                label="Телефон"
                value={userInfo.phone}
                onEditClick={() =>
                  openModal("Изменить телефон", "Отправить", {
                    id: "phone",
                    name: "phone",
                    placeholder: "Введите телефон",
                    type: "text",
                  })
                }
              />

              <ProfileField
                label="Дата рождения"
                value={userInfo.birthDate}
                onEditClick={() =>
                  openModal("Изменить дату рождения", "Сохранить", {
                    id: "birthDate",
                    name: "birthDate",
                    placeholder: "Введите дату рождения",
                    type: "date",
                  })
                }
              />

              <ProfileField
                label="Организация"
                value={userInfoFull.organization}
                // onEditClick={() => {}}
                isEditable={false}
              />

              <ProfileField
                label="Роль"
                value={userInfo.isSuperuser ? "Начальник" : "Участник"}
                // onEditClick={() => {}}
                isEditable={false}
              />
            </div>
          ) : null}
        </div>

        <div className="mt-8 border border-zinc-200 rounded p-3">
          <div className="flex items-center justify-between">
            <p className="text-gray-500">
              Подтверидите вашу почту: &nbsp;
              <span className="text-black">{userInfo.email}</span>
            </p>

            {userInfo.isVerified ? (
              <CircleCheck size={24} className="stroke-green-500" />
            ) : (
              <Button
                className="bg-blue-500 text-white"
                onClick={handleVerifiedEmail}
              >
                Подтвердить
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Подтверждение почты */}
      {isModalOpen && !userInfo.isVerified ? (
        <Modal className="w-1/2 max-w-xl" onClose={() => setIsModalOpen(false)}>
          <VerifyUserData
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
          <ChangeUserDataForm
            title={modalState.title}
            methods={methods}
            field={modalState.field}
            buttonText={modalState.buttonText}
            handleFormSave={methods.handleSubmit(handleModalSave)}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default UserProfileCard;
