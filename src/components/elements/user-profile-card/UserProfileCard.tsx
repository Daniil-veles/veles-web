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
import { UserInfo } from "@/types/state.interface";

interface IUserProfileCardProp {
  userInfo: UserInfo;
  openModal: (...args: any[]) => void;
}

const UserProfileCard: React.FC<IUserProfileCardProp> = ({
  userInfo,
  openModal,
}) => {
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
                    componentType: ComponentFormEnum.INPUT,
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
                    componentType: ComponentFormEnum.INPUT,
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
                    componentType: ComponentFormEnum.INPUT,
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
                    componentType: ComponentFormEnum.INPUT,
                  })
                }
              />

              <ProfileField
                label="Организация"
                value={userInfo.organization}
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

      
      </div>
    </>
  );
};

export default UserProfileCard;
