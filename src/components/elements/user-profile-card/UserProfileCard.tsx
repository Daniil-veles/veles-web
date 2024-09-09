import { UserInfo } from "@/types/state.interface";
import Image from "next/image";
import ChangerData from "@/components/ui/changer-data/ChangerData";
import FieldChanger from "@/components/ui/field-changer/FieldChanger";
import { ComponentFormEnum } from "@/types/form.interface";
import ScreenTitle from "@/components/ui/screen-title/ScreenTitle";

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
          <ScreenTitle className="text-4xl mb-4" title="Личные данные" />

            {userInfo.email ? (
              <div className="">
                <FieldChanger className="flex gap-5 items-center mb-2">
                  <p className="text-gray-500 min-w-[160px]">ФИО</p>

                  <ChangerData
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
                </FieldChanger>

                <FieldChanger className="flex gap-5 items-center mb-2">
                  <p className="text-gray-500 min-w-[160px]">Почта</p>

                  <ChangerData
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
                </FieldChanger>

                <FieldChanger className="flex gap-5 items-center mb-2">
                  <p className="text-gray-500 min-w-[160px]">Телефон</p>

                  <ChangerData
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
                </FieldChanger>

                <FieldChanger className="flex gap-5 items-center mb-2">
                  <p className="text-gray-500 min-w-[160px]">Дата рождения</p>

                  <ChangerData
                    value={userInfo.phone}
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
                </FieldChanger>

                <FieldChanger className="flex gap-5 items-center mb-2">
                  <p className="text-gray-500 min-w-[160px]">Организация</p>

                  <ChangerData
                    value={userInfo.organization}
                    isEditable={false}
                  />
                </FieldChanger>

                <FieldChanger className="flex gap-5 items-center mb-2">
                  <p className="text-gray-500 min-w-[160px]">Роль</p>

                  <ChangerData
                    value={userInfo.isSuperuser ? "Руководитель" : "Участник"}
                    isEditable={false}
                  />
                </FieldChanger>
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
