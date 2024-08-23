import ChangerData from "@/components/ui/changer-data/ChangerData";
import FieldChanger from "@/components/ui/field-changer/FieldChanger";
import ModalUpdateInfoForm from "@/components/ui/modal-update-info-form/ModalUpdateInfoForm";
import Modal from "@/components/ui/modal/Modal";
import { ModalState } from "@/types/common.interface";
import { Company } from "@/types/company.interface";
import { ComponentFormEnum, IFormField } from "@/types/form.interface";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IOrganizationItemProps {
  organization: Company;
}

const OrganizationInfo: React.FC<IOrganizationItemProps> = ({
  organization,
}) => {
  const {
    name,
    phone,
    email,
    address,
    info,
    type,
    INN,
    KPP,
    OGRN,
    OKPO,
    BIK,
    corr_account,
    employees,
  } = organization;

  // Состояния для модальных окон
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    buttonText: "",
    field: {
      id: "",
      name: "",
      label: "",
      placeholder: "",
      type: "",
      componentType: ComponentFormEnum.INPUT,
    },
  });

  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const handleModalOpen = (
    title: string,
    buttonText: string,
    field?: IFormField
  ) => {
    setModalState({
      isOpen: true,
      title,
      buttonText,
      field,
    });
  };

  const handleModalSave = async (data: any) => {
    // const adaptedData = {
    //   email: userInfo.email,
    //   password: userInfo.password ?? "dbhsbdS1",
    //   full_name: userInfo.fullName,
    //   birth_date: userInfo.birthDate,
    //   phone: userInfo.phone,
    //   picture: userInfo.picture,
    //   is_active: true,
    //   is_superuser: false,
    //   is_verified: false,
    // };

    // // Создаем объект для отправки на сервер
    // const response = await UserService.updateUserInfo(adaptedData);
    // const adaptedResponse = adaptToUserData(response);
    // dispatch(setUserInfo(adaptedResponse));
    // console.log(adaptedResponse);

    closeModal();
    methods.reset({});
  };

  const closeModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  console.log(modalState);

  return (
    <div className="rounded-md border border-zinc-50 shadow p-4 px-6">
      <div>
        <h3 className="text-xl font-semibold mb-3">
          <ChangerData
            className="text-xl inline-block"
            value={name}
            onEditClick={() =>
              handleModalOpen("Изменить название", "Сохранить", {
                id: "phone",
                name: "phone",
                placeholder: "Введите название компании",
                type: "tel",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </h3>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">ФИО</p>

          <ChangerData
            value={phone}
            onEditClick={() =>
              handleModalOpen("Изменить телефон", "Сохранить", {
                id: "phone",
                name: "phone",
                placeholder: "Введите телефон",
                type: "tel",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">Электронная почта</p>

          <ChangerData
            value={email}
            onEditClick={() =>
              handleModalOpen("Изменить электронную почту", "Сохранить", {
                id: "phone",
                name: "phone",
                placeholder: "Введите электронную почту",
                type: "email",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">Адрес</p>
          <ChangerData
            value={address}
            onEditClick={() =>
              handleModalOpen("Изменить адрес", "Сохранить", {
                id: "address",
                name: "address",
                placeholder: "Введите адрес",
                type: "text",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">Информация</p>
          <ChangerData
            value={info}
            onEditClick={() =>
              handleModalOpen("Изменить информацию", "Сохранить", {
                id: "info",
                name: "info",
                placeholder: "Введите информацию",
                type: "text",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">Тип</p>
          <ChangerData
            value={type}
            onEditClick={() =>
              handleModalOpen("Изменить тип", "Сохранить", {
                id: "type",
                name: "type",
                placeholder: "Введите тип",
                type: "text",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">ИНН</p>
          <ChangerData
            value={INN}
            onEditClick={() =>
              handleModalOpen("Изменить ИНН", "Сохранить", {
                id: "INN",
                name: "INN",
                placeholder: "Введите ИНН",
                type: "text",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">КПП</p>
          <ChangerData
            value={KPP}
            onEditClick={() =>
              handleModalOpen("Изменить КПП", "Сохранить", {
                id: "KPP",
                name: "KPP",
                placeholder: "Введите КПП",
                type: "text",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">ОГРН</p>
          <ChangerData
            value={OGRN}
            onEditClick={() =>
              handleModalOpen("Изменить ОГРН", "Сохранить", {
                id: "OGRN",
                name: "OGRN",
                placeholder: "Введите ОГРН",
                type: "text",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">ОКПО</p>
          <ChangerData
            value={OKPO}
            onEditClick={() =>
              handleModalOpen("Изменить ОКПО", "Сохранить", {
                id: "OKPO",
                name: "OKPO",
                placeholder: "Введите ОКПО",
                type: "text",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">БИК</p>
          <ChangerData
            value={BIK}
            onEditClick={() =>
              handleModalOpen("Изменить БИК", "Сохранить", {
                id: "BIK",
                name: "BIK",
                placeholder: "Введите БИК",
                type: "text",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8 mb-2">
          <p className="text-gray-500 min-w-[200px]">Корр. счет</p>
          <ChangerData
            value={corr_account}
            onEditClick={() =>
              handleModalOpen("Изменить корр. счет", "Сохранить", {
                id: "corr_account",
                name: "corr_account",
                placeholder: "Введите корр. счет",
                type: "text",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>

        <FieldChanger className="flex gap-5 items-center h-8">
          <p className="text-gray-500 min-w-[200px]">Количество сотрудников</p>
          <ChangerData
            value={employees}
            onEditClick={() =>
              handleModalOpen("Изменить количество сотрудников", "Сохранить", {
                id: "employees",
                name: "employees",
                placeholder: "Введите количество сотрудников",
                type: "number",
                componentType: ComponentFormEnum.INPUT,
              })
            }
          />
        </FieldChanger>
      </div>

      {modalState.isOpen && (
        <Modal className="w-1/2 max-w-xl" onClose={closeModal}>
          <ModalUpdateInfoForm
            title={modalState.title}
            methods={methods}
            field={modalState.field}
            buttonText={modalState.buttonText}
            handleFormSave={(data) => handleModalSave(data)}
          />
        </Modal>
      )}
    </div>
  );
};

export default OrganizationInfo;
