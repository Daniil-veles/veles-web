import DashboardTitle from "@/components/ui/dashboard-title/DashboardTitle";
import FormField from "@/components/ui/form-field/FormField";
import PrivateRoute from "@/hoc/PrivateRoute";
import { useAppSelector } from "@/hooks";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ComponentFormEnum } from "@/types/form.interface";
import { Settings, SquarePen } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";

const ProfileScreen: React.FC = () => {
  const userInfo = useAppSelector((state) => state.USER);

  const methods = useForm({
    mode: "onChange",
    // resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      fullName: userInfo.fullName,
      email: userInfo.email,
      phone: userInfo.phone,
      birthDate: userInfo.birthDate,
    },
  });

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

            <div className="bg-white rounded-xl p-3">
              <Settings size={24} />
            </div>
          </header>

          <FormProvider {...methods}>
            <form
              className="grow grid grid-cols-[265px_1fr] gap-10"
              onSubmit={methods.handleSubmit(onSubmit)}
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

                    <div className="bg-c-blue-300 p-3 rounded-xl">
                      <SquarePen />
                    </div>
                  </div>

                  <h2 className="mb-1 text-xl">{userInfo.fullName}</h2>

                  <p>{userInfo.fullName}</p>
                </div>

                <div className="flex flex-col justify-between grow pt-4 px-6 pb-8">
                  <div>
                    <h3 className="mb-1 text-lg">Общая информация</h3>

                    <ul className="">
                      <li className="mb-2">
                        <FormField
                          value={{
                            id: "fullName",
                            name: "fullName",
                            label: "Имя",
                            placeholder: ".",
                            type: "text",
                            componentType: ComponentFormEnum.INPUT,
                            required: true,
                            className: "",
                          }}
                        />
                      </li>

                      <li>
                        <FormField
                          value={{
                            id: "birthDate",
                            name: "birthDate",
                            label: "Дата рождения",
                            placeholder: ".",
                            type: "date",
                            componentType: ComponentFormEnum.INPUT,
                            required: true,
                            className: "",
                          }}
                        />
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-1 text-lg">Контакты</h3>

                    <ul>
                      <li className="mb-2">
                        <FormField
                          value={{
                            id: "email",
                            name: "email",
                            label: "Почта",
                            placeholder: ".",
                            type: "email",
                            componentType: ComponentFormEnum.INPUT,
                            required: true,
                            className: "",
                          }}
                        />
                      </li>
                      <li>
                        <FormField
                          value={{
                            id: "phone",
                            name: "phone",
                            label: "Телефон",
                            placeholder: ".",
                            type: "tel",
                            componentType: ComponentFormEnum.INPUT,
                            required: true,
                            className: "",
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </DashboardLayout>
    </PrivateRoute>
  );
};

export default ProfileScreen;
