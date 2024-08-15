import { ComponentFormEnum } from "@/types/types.interface";
import ProfileField from "@/components/ui/profile-field/ProfileField";
import { UserInfo } from "@/types/state.interface";
import Image from "next/image";

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
      <div className="mb-5">
        <div className="grid grid-cols-[60%_1fr] gap-5 rounded-md border border-zinc-50 shadow p-4 px-6">
          <div className="relative w-full h-full aspect-square col-start-2">
            <Image
              src="/user-3.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="row-start-1">
            <h2 className="flex items-center text-2xl mb-4">Личные данные</h2>

            {userInfo.email ? (
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
                  value={userInfo.isSuperuser ? "Руководитель" : "Участник"}
                  // onEditClick={() => {}}
                  isEditable={false}
                />
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;
