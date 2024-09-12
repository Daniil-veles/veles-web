import CustomInput from "@/components/ui/custom-input/CustomInput";
import DashboardTitle from "@/components/ui/dashboard-title/DashboardTitle";
import PrivateRoute from "@/hoc/PrivateRoute";
import { useAppSelector } from "@/hooks";
import DashboardLayout from "@/layouts/DashboardLayout";
import cn from "classnames";
import { MoveLeft, MoveRight, Settings, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export const formDefaultValues = {
  fullName: "",
  email: "",
  phone: "",
  birthDate: "",
};

const ProfileScreen: React.FC = () => {
  const [isCommonInfo, setIsCommonInfo] = useState(true);
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

          <form
            className="grow grid grid-cols-[265px_1fr] gap-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col bg-white rounded-3xl">
              <div className="border-b border-c-gray pt-4 px-6 pb-4">
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

                <div className="flex justify-between items-center text-c-dark-gray">
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
                          "bg-c-dark-gray": !isCommonInfo,
                        }
                      )}
                    ></span>
                    <span
                      className={cn(
                        "block w-2 h-2 rounded-full transition-colors duration-500 ease-in-out ease",
                        {
                          "bg-c-blue-500": !isCommonInfo,
                          "bg-c-dark-gray": isCommonInfo,
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
        </div>
      </DashboardLayout>
    </PrivateRoute>
  );
};

export default ProfileScreen;
