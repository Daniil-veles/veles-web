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

const PersonInfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.USER);
  const userInfoFull = { ...userInfo, organization: "ООО Велесъ" };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          isVerified: true, // Статус верификации пользователя
          picture: "https://example.com/picture.jpg", // Ссылка на фото пользователя
          isAuth: "AUTHENTICATED", // Статус аутентификации пользователя
          organization: "ООО Велесъ", // Статус аутентификации пользователя
        };
        dispatch(setUserInfo(user));

        // Обновляет данные пользователя в сторе
        // dispatch(setUserInfo(userInfo));
      } catch (error) {
        console.error("Error fetching user info:", error.message);
      }
    }

    fetchUserInfo();
  }, [dispatch]);

  const handleEditComplete = (field: keyof typeof userInfo, value: string) => {
    dispatch(setUserInfo({ ...userInfo, [field]: value }));
  };

  async function verifyUserEmail() {
    try {
      const response = await UserService.verifyUserEmail();

      if (response.status == 200) {
        console.log("User created successfully:", response.data);
      }
    } catch (error) {
      console.error("Failed to verified user:", error.response);
    }
  }

  const handleVerifiedEmail = () => {
    openModal();
    verifyUserEmail();
  };

  const isEditData = false;

  // Hook форма.
  const methods = useForm({
    mode: "onChange",
    // resolver: zodResolver(formSchema),
    // defaultValues: initialValues,
  });

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
                  // className={"border-b"}
                  value={userInfo.fullName}
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

        <div className="col-span-full mt-8 border border-zinc-200 rounded p-3">
          <div className="flex items-center justify-between">
            <p className="text-gray-500">
              Подтверидите вашу почту: &nbsp;
              <span className="text-black">{userInfo.email}</span>
            </p>

            {isVerified ? (
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
      {isModalOpen ? (
        <Modal className="w-1/2 max-w-xl" onClose={closeModal}>
          <div className="">
            <h3 className="mb-3 text-xl font-semibold">
              Подтвердите вашу почту
            </h3>
            <p className="mb-4">
              Для завершения регистрации и доступа ко всем функциям нашего
              сервиса, пожалуйста, подтвердите вашу электронную почту. На
              указанный адрес:
              <b>&nbsp;{userInfo.email}&nbsp;</b>
              было отправлено письмо с инструкциями по подтверждению.
            </p>

            <p>
              Если вы не получили письмо, проверьте папку "Спам" или нажмите
              кнопку ниже, чтобы отправить письмо повторно.
            </p>

            <div className="mt-6 flex justify-center">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={verifyUserEmail}
              >
                Отправить письмо повторно
              </button>
            </div>
          </div>
        </Modal>
      ) : null}

      {/* Редактировать данные */}
      {isEditData ? (
        <Modal className="w-1/2 max-w-xl" onClose={closeModal}>
          <div className="">
            <h3 className="mb-6 text-2xl font-semibold">
              Заголовок
              {/* {title} */}
            </h3>

            <FormProvider {...methods}>
              <form
                // onSubmit={methods.handleSubmit(onSubmit)}
                className="flex justify-between"
              >
                <FormField
                  value={{
                    id: "name",
                    name: "name",
                    // label: "Имя",
                    placeholder: "Введите имя",
                    componentType: ComponentFormEnum.INPUT,
                  }}
                />

                <button
                  className="flex items-center justify-center bg-blue-500 text-white px-4 min-w-[140px] rounded hover:bg-blue-700"
                  onClick={verifyUserEmail}
                >
                  Поменять
                  <ChevronRight size={20} className="ml-2" />
                </button>
              </form>
            </FormProvider>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default PersonInfo;
