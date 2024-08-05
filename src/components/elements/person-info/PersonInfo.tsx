// import styles from './OrganizationInfo.module.scss';

import { ChevronLeft, CircleCheck, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { UserServerData } from "@/types/user.interface";
import { UserService } from "@/services/user.service";
import { adaptToUserData } from "@/utils/utils";
import { setUserInfo } from "@/store/slices/userSlice";
import ChangerData from "@/components/ui/changer-data/ChangerData";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal/Modal";

const PersonInfo: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.USER);
  const userInfoFull = { ...userInfo, organization: "ООО Велесъ" };
  console.log(isEditing);

  const [isVerified, setIsVerified] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditComplete = (field: keyof typeof userInfo, value: string) => {
    dispatch(setUserInfo({ ...userInfo, [field]: value }));
  };

  return (
    <>
      <h2 className="flex items-center text-xl mb-4 ">Ваша информация</h2>

      <div className="grid grid-cols-[208px_1fr] gap-x-14">
        <img src="" alt="" className="w-full h-52 rounded-full" />

        {userInfo.id ? (
          <div className="">
            <div className="mb-5">
              <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
                <p className="font-medium">ФИО</p>

                <ChangerData
                  className={"border-b"}
                  value={userInfo.fullName}
                  isEditing={isEditing}
                  onEditComplete={(value) =>
                    handleEditComplete("fullName", value)
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
                <p className="font-medium">Почта</p>

                <ChangerData
                  className={"border-b"}
                  value={userInfo.email}
                  isEditing={isEditing}
                  onEditComplete={(value) => handleEditComplete("email", value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
                <p className="font-medium">Телефон</p>

                <ChangerData
                  className={"border-b"}
                  value={userInfo.phone}
                  isEditing={isEditing}
                  onEditComplete={(value) => handleEditComplete("phone", value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
                <p className="font-medium">Организация</p>

                <p className="border-b h-8 px-2">{userInfoFull.organization}</p>
              </div>
              <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
                <p className="font-medium">Статус</p>

                <p className="border-b h-8 px-2">
                  {userInfo.isSuperuser ? "Начальник" : "Участник"}
                </p>
              </div>
            </div>

            <Button
              className="bg-blue-500 text-white"
              onClick={handleEditToggle}
            >
              {isEditing ? "Сохранить" : "Редактировать"}
            </Button>
          </div>
        ) : null}

        <div className="col-span-full mt-8 border border-zinc-200 rounded p-3">
          <div className="flex items-center justify-between">
            <p className="font-medium">
              Подтверидите вашу почту:&nbsp; {userInfo.email}
            </p>

            {isVerified ? (
              <CircleCheck size={24} className="stroke-green-500" />
            ) : (
              <Button className="bg-blue-500 text-white" onClick={openModal}>
                Подтвердить
              </Button>
            )}
          </div>
        </div>
      </div>

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
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Отправить письмо повторно
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default PersonInfo;
