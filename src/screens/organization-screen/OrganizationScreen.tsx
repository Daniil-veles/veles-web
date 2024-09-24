import ButtonLittle from "@/components/ui/custom-button/button-little/ButtonLittle";
import DashboardTitle from "@/components/ui/dashboard-title/DashboardTitle";
import Modal from "@/components/ui/modal/Modal";
import OrganizationScreenUpdateForm from "@/components/ui/organization-screen-update-form/OrganizationScreenUpdateForm";
import OrganizationScreenCreateForm from "@/components/ui/organization-screen-create-form/OrganizationScreenCreateForm";
import PrivateRoute from "@/hoc/PrivateRoute";
import { useAppSelector } from "@/hooks";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const employee = [
  { picture: "https://via.placeholder.com/600/92c952", name: "John" },
  { picture: "https://via.placeholder.com/600/92c952", name: "David" },
  { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
  { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
  { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
  { picture: "https://via.placeholdexr.com/150/51aa97", name: "Morfi" },
  { picture: "https://via.placeholder.com/150/51aa97", name: "Morfi" },
];

const OrganizationScreen: React.FC = () => {
  // Состояния для модальных окон
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [organization, setOrganization] = useState(false);
  const organizationInfo = useAppSelector((state) => state.ORGANIZATION);

  return (
    // <PrivateRoute>
    <DashboardLayout
      title="Личный кабинет"
      description="Это главная страница сайта"
    >
      <div className="h-full flex flex-col">
        <header className="flex justify-between items-center mb-2 pl-2">
          <DashboardTitle title="Организация" />

          {!organization ? (
            <ButtonLittle onClick={() => setIsModalOpen(true)}>
              <Plus className="mr-1" size={18} />
              Добавить организацию
            </ButtonLittle>
          ) : null}
        </header>

        {organization ? (
          <div className="flex grow gap-x-[30px]">
            <div className="flex flex-col w-[265px] bg-white rounded-3xl pt-4 px-6 pb-4 flex-shrink-0">
              <h2 className="mb-3 text-lg">Данные из ФНС</h2>

              <div className="mb-3">
                <p className="mb-2 text-c-gray-800">Директор:</p>

                <div className="flex items-center">
                  <img
                    className="w-5 h-5 rounded-full mr-3"
                    src="./userIcon.webp"
                    alt=""
                  />
                  <p className="">Павел Петрович</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="mb-2 text-c-gray-800">Сотрудники:</p>

                <div className="flex">
                  {employee && employee.length > 0
                    ? employee
                        .slice(0, 3)
                        .map((employee, index) => (
                          <img
                            key={index}
                            className="w-6 h-6 rounded-full bg-c-gray-800"
                            src={employee.picture}
                            alt={employee.name}
                          />
                        ))
                    : null}

                  {employee && employee.length > 3 && (
                    <span className="flex items-center justify-center bg-c-blue-800 text-white text-sm w-6 h-6 rounded-full">
                      +{employee.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mb-auto">
                <li className="mb-3">
                  <p className="mb-1 text-c-gray-800">Годовой оборот:</p>

                  <p className="">5 000 000 P</p>
                </li>
                <li className="mb-3">
                  <p className="mb-1 text-c-gray-800">
                    Основной вид деятельности:
                  </p>

                  <p className="">
                    Строительство жилых и нежилых зданий (41.20)
                  </p>
                </li>
                <li className="mb-3">
                  <p className="mb-1 text-c-gray-800">
                    Среднесписочная численность:
                  </p>

                  <p className="">200</p>
                </li>
                <li className="mb-3">
                  <p className="mb-1 text-c-gray-800">Телефон:</p>

                  <p className="">8 (980) 800 80 01</p>
                </li>
                <li className="mb-3">
                  <p className="mb-1 text-c-gray-800">Электронная почта:</p>

                  <p className="">test@mail.ru</p>
                </li>
                <li className="mb-3">
                  <p className="mb-1 text-c-gray-800">Дата регистрации:</p>

                  <p className="">01.01.2000</p>
                </li>
              </ul>

              <ButtonLittle className="bg-red-500">
                <Trash2 className="mr-1" size={18} />
                Удалить организацию
              </ButtonLittle>
            </div>

            <div className="flex flex-col w-full">
              <div className="h-10">
                <h1 className="text-lg font-medium">{`${organizationInfo.name_legal} (${organizationInfo.INN})`}</h1>
              </div>

              <OrganizationScreenUpdateForm />
            </div>
          </div>
        ) : (
          <div className="flex flex-col grow justify-center items-center ">
            <img className="w-1/2 mb-3" src="./org.jpg" alt="" />

            <h2 className="mb-3 text-lg">У вас еще нет организации</h2>
          </div>
        )}
      </div>

      {isModalOpen && (
        <Modal className="w-[90%]" onClose={() => setIsModalOpen(false)}>
          <div className="w-full max-w-4xl m-auto">
            <OrganizationScreenCreateForm
              setOrganization={(state) => setOrganization(state)}
              setIsModalOpen={(state) => setIsModalOpen(state)}
            />
          </div>
        </Modal>
      )}
    </DashboardLayout>
    // </PrivateRoute>
  );
};

export default OrganizationScreen;
