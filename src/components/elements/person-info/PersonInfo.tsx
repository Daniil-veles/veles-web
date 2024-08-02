// import styles from './OrganizationInfo.module.scss';

import { ChevronLeft, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { UserServerData } from "@/types/user.interface";
import { UserService } from "@/services/user.service";
import { adaptToUserData } from "@/utils/utils";
import { setUserInfo } from "@/store/slices/userSlice";
import ChangerData from "@/components/ui/changer-data/ChangerData";
import { Button } from "@/components/ui/button";

const PersonInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.USER);
  console.log(userInfo);

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
          isSuperuser: false, // Статус суперпользователя
          isVerified: true, // Статус верификации пользователя
          picture: "https://example.com/picture.jpg", // Ссылка на фото пользователя
          isAuth: "AUTHENTICATED", // Статус аутентификации пользователя
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

  return (
    <>
      <h2 className="flex items-center text-xl mb-4 ">Ваша информация</h2>

      <div className="grid grid-cols-[208px_1fr] gap-x-10">
        <img src="" alt="" className="w-full h-52 rounded-full" />

        {userInfo.id ? (
            <div className="">
              <div className="mb-5">
                <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
                  <p className="font-medium">ФИО</p>

                  <ChangerData
                    className={"border-b"}
                    value={userInfo.fullName}
                  />
                </div>

                <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
                  <p className="font-medium">Почта</p>

                  <ChangerData className={"border-b"} value={userInfo.email} />
                </div>
                <div className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
                  <p className="font-medium">Телефон</p>

                  <ChangerData className={"border-b"} value={userInfo.phone} />
                </div>
              </div>

              <Button className="bg-blue-500 text-white">Редактировать</Button>
            </div>
        ) : null}

        <div className="col-span-full mt-8 border border-zinc-200 rounded p-3">
          <div className="flex items-center justify-between">
            <p className="font-medium">Подтверидите вашу почту</p>

            <ChangerData className={"border-b"} value="email@mail.ru" />

            <Button className="bg-blue-500 text-white">Подтвердить</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonInfo;
