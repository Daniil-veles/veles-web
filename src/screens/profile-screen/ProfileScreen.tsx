import CustomInput from "@/components/ui/custom-input/CustomInput";
import DashboardTab from "@/components/ui/dashboard-tab/DashboardTab";
import DashboardTitle from "@/components/ui/dashboard-title/DashboardTitle";
import { exampleObjectList } from "@/const/const";
import PrivateRoute from "@/hoc/PrivateRoute";
import { useAppSelector } from "@/hooks";
import DashboardLayout from "@/layouts/DashboardLayout";
import cn from "classnames";
import {
  Calendar,
  MoveLeft,
  MoveRight,
  Settings,
  SquarePen,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export const formDefaultValues = {
  fullName: "",
  email: "",
  phone: "",
  birthDate: "",
};

const list = [
  { name: "оbject", title: "Объекты" },
  { name: "task", title: "Задачи" },
  { name: "department", title: "Отдел" },
];

// const taskList = [
//   { name: "оbject", title: "Объекты" },
//   { name: "task", title: "Задачи" },
// ];

const ProfileScreen: React.FC = () => {
  const [isCommonInfo, setIsCommonInfo] = useState(true);
  const [activeItem, setActiveItem] = useState(list[0].name);
  const userInfo = useAppSelector((state) => state.USER);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formDefaultValues,
    // resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (userInfo) {
      reset({
        fullName: userInfo.fullName,
        email: userInfo.email,
        phone: userInfo.phone,
        birthDate: userInfo.birthDate,
      });
    }
  }, [userInfo, reset]);

  async function onSubmit(data: { email: string }) {
    try {
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <PrivateRoute>
      <DashboardLayout
        title="Личный кабинет"
        description="Это главная страница сайта"
      >
        <div className="h-full flex flex-col">
          <header className="flex justify-between mb-2 pl-2">
            <DashboardTitle title="Профиль" />

            <div className="w-10 h-10 flex justify-center items-center bg-white rounded-xl">
              <Settings size={18} />
            </div>
          </header>

          <div className="flex grow gap-x-[30px]">
            <form
              className="flex flex-col max-w-[265px] w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grow flex flex-col bg-white rounded-3xl">
                <div className="border-b border-c-gray-500 pt-4 px-6 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-[72px] h-[72px] p-1 border-2 border-c-blue-500 rounded-full">
                      <img
                        className="w-full h-full rounded-full"
                        src={"/user-3.webp"}
                        alt="Аватарка"
                      />
                    </div>

                    <div className="w-10 h-10 flex justify-center items-center bg-c-blue-300 rounded-xl">
                      <SquarePen size={18} />
                    </div>
                  </div>

                  <h2 className="mb-1 text-lg">{userInfo.fullName}</h2>

                  <p>{userInfo.fullName}</p>
                </div>

                <div className="flex flex-col justify-between grow pt-4 px-6 pb-8">
                  {isCommonInfo ? (
                    <div>
                      <h3 className="mb-3 text-lg">Общая информация</h3>

                      <ul className="">
                        <li className="mb-2">
                          <Controller
                            name="fullName"
                            control={control}
                            render={({ field, fieldState }) => (
                              <CustomInput
                                className=""
                                fieldData={{
                                  id: "fullName",
                                  name: "fullName",
                                  label: "Полное имя",
                                  placeholder: "Павел Петров",
                                  type: "text",
                                }}
                                fieldValue={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                error={fieldState.error}
                                required
                              />
                            )}
                          />
                        </li>

                        <li>
                          <Controller
                            name="birthDate"
                            control={control}
                            render={({ field, fieldState }) => (
                              <CustomInput
                                className=""
                                fieldData={{
                                  id: "birthDate",
                                  name: "birthDate",
                                  label: "Дата рождения",
                                  placeholder: "21.10.1990",
                                  type: "text",
                                }}
                                fieldValue={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                error={fieldState.error}
                                required
                              />
                            )}
                          />
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <h3 className="mb-3 text-lg">Контакты</h3>

                      <ul>
                        <li className="mb-2">
                          <Controller
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => (
                              <CustomInput
                                className=""
                                fieldData={{
                                  id: "email",
                                  name: "email",
                                  label: "Почта",
                                  placeholder: "m@example.com",
                                  type: "email",
                                }}
                                fieldValue={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                error={fieldState.error}
                                required
                              />
                            )}
                          />
                        </li>

                        <li>
                          <Controller
                            name="phone"
                            control={control}
                            render={({ field, fieldState }) => (
                              <CustomInput
                                className=""
                                fieldData={{
                                  id: "phone",
                                  name: "phone",
                                  label: "Телефон",
                                  placeholder: "+7 (123) 456 78 90",
                                  type: "tel",
                                }}
                                fieldValue={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                error={fieldState.error}
                                required
                              />
                            )}
                          />
                        </li>
                      </ul>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-c-gray-800">
                    {!isCommonInfo ? (
                      <button onClick={() => setIsCommonInfo(true)}>
                        <MoveLeft size={18} />
                      </button>
                    ) : (
                      <span className="block w-[18px]"></span>
                    )}

                    <div className="flex gap-2">
                      <span
                        className={cn(
                          "block w-2 h-2 rounded-full transition-colors duration-500 ease-in-out ease",
                          {
                            "bg-c-blue-500": isCommonInfo,
                            "bg-c-gray-800": !isCommonInfo,
                          }
                        )}
                      ></span>
                      <span
                        className={cn(
                          "block w-2 h-2 rounded-full transition-colors duration-500 ease-in-out ease",
                          {
                            "bg-c-blue-500": !isCommonInfo,
                            "bg-c-gray-800": isCommonInfo,
                          }
                        )}
                      ></span>
                    </div>

                    {isCommonInfo ? (
                      <button onClick={() => setIsCommonInfo(false)}>
                        <MoveRight size={18} />
                      </button>
                    ) : (
                      <span className="block w-[18px]"></span>
                    )}
                  </div>
                </div>
              </div>
            </form>

            <div className="w-full h-full grid-row-[200px_1fr] flex flex-col">
              <div className="mb-6">
                <DashboardTab
                  list={list}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              </div>

              {activeItem === "оbject" && (
                <ul className="max-h-[calc(100vh-250px)] overflow-y-auto grid gap-y-4 pr-2">
                  {exampleObjectList.length > 0 &&
                    exampleObjectList.map((item, index) => (
                      <li
                        key={`${item.name}-${index}`}
                        className="grid grid-cols-2 bg-white rounded-3xl"
                      >
                        <div className="flex flex-col justify-between p-5 border-r border-c-gray-500">
                          <div className="flex items-end mb-4">
                            <img
                              className="w-12 h-12 rounded-lg mr-4"
                              src="./img-2.webp"
                              alt="Фото"
                            />

                            <h3 className="text-lg font-medium">
                              {item.title}
                            </h3>
                          </div>

                          <div className="flex justify-between">
                            <p className="flex items-center text-c-gray-800">
                              <Calendar className="mr-2" />

                              <span>
                                Создана:
                                {item.data}
                              </span>
                            </p>

                            <p
                              className={`font-medium ${
                                item.priority === "low" ? "#fefefe" : ""
                              }`}
                            >
                              {item.priority}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between p-5">
                          <h3 className="text-base font-medium mb-4">
                            Данные о проекте
                          </h3>

                          <ul className="flex justify-between">
                            <li className="flex flex-col">
                              <p className="text-c-gray-800">Все задачи:</p>

                              <p className="font-medium">{item.tasks}</p>
                            </li>

                            <li className="flex flex-col">
                              <p className="text-c-gray-800">Активные:</p>
                              <p className="font-medium">{item.activeTasks}</p>
                            </li>

                            <li className="flex flex-col">
                              <p className="text-c-gray-800">Участники:</p>
                              <div className="flex items-center">
                                {item.employee && item.employee.length > 0
                                  ? item.employee
                                      .slice(0, 4)
                                      .map((employee, index) => (
                                        <img
                                          key={index}
                                          className="w-6 h-6 rounded-full bg-c-gray-800"
                                          src={employee.picture}
                                          alt={employee.name}
                                        />
                                      ))
                                  : null}

                                {item.employee && item.employee.length > 4 && (
                                  <span className="flex items-center justify-center bg-c-blue-800 text-white text-sm w-6 h-6 rounded-full">
                                    +{item.employee.length - 4}
                                  </span>
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </PrivateRoute>
  );
};

export default ProfileScreen;
