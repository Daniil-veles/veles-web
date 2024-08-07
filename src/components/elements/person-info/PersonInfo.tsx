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

// Интерфейсы для состояния поля и модального окна
interface FieldState {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  newValue: string;
  componentType: ComponentFormEnum;
}

interface ModalState {
  isOpen: boolean;
  title: string;
  buttonText: string;
  field: FieldState;
}

const PersonInfo: React.FC = () => {
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
      newValue: "",
      componentType: ComponentFormEnum.INPUT,
    },
  });

  const openModal = (
    field: Partial<FieldState>,
    title: string,
    value: string,
    buttonText: string
  ) => {
    setModalState({
      isOpen: true,
      title,
      buttonText,
      field: {
        id: field.id || "",
        name: field.name || "",
        label: field.label || "",
        placeholder: field.placeholder || '',
        newValue: field.newValue || value,
        componentType: field.componentType || ComponentFormEnum.INPUT, // Используем значение по умолчанию
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
        newValue: "",
        componentType: ComponentFormEnum.INPUT, // Возвращаем значение по умолчанию
      },
    });
  };

  const handleSave = (data: any) => {
    dispatch(
      setUserInfo({
        ...userInfo,
        [modalState.field.name]: data.newValue,
      })
    );

    closeModal();
  };

  // Hook форма.
  const methods = useForm({
    mode: "onChange",
    defaultValues: { newValue: modalState.field.newValue },
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
              <div className="flex gap-5 items-center h-8 mb-3">
                <p className="text-gray-500 min-w-[160px]">ФИО</p>
             
                <ChangerData
                  value={userInfo.fullName}
                  onEditClick={() => openModal(
                    { id: "fullName", name: "fullName", placeholder: "Введите полное имя" },
                    "Изменить ФИО",
                    userInfo.fullName,
                    "Сохранить"
                  )}
                />
              </div>

              <div className="flex gap-5 items-center h-8 mb-3">
                <p className="text-gray-500 min-w-[160px]">Почта</p>

                <ChangerData
                  // className={"border-b"}
                  value={userInfo.email}
                />
              </div>

              <div className="flex gap-5 items-center h-8 mb-3">
                <p className="text-gray-500 min-w-[160px]">Телефон</p>

                <ChangerData
                  // className={"border-b"}
                  value={userInfo.phone}
                />
              </div>

              <div className="flex gap-5 items-center h-8 mb-3">
                <p className="text-gray-500 min-w-[160px]">Дата рождения</p>

                <ChangerData
                  // className={"border-b"}
                  value={userInfo.birthDate}
                />
              </div>

              <div className="flex gap-5 items-center h-8 mb-3">
                <p className="text-gray-500 min-w-[160px]">Организация</p>

                <p className="h-6">{userInfoFull.organization}</p>
              </div>

              <div className="flex gap-5 items-center h-8">
                <p className="text-gray-500 min-w-[160px]">Роль</p>

                <p className="h-6">
                  {userInfo.isSuperuser ? "Начальник" : "Участник"}
                </p>
              </div>
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
            handleFormSave={methods.handleSubmit(handleSave)}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default PersonInfo;
