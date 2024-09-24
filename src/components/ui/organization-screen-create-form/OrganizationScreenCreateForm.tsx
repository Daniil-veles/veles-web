import React, { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../custom-input/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../button";
// import { OrganizationType } from "./OrganizationScreenCreateForm";

const formFields = [
  { key: "name", label: "Имя организации" },
  { key: "phone", label: "Телефон" },
  { key: "email", label: "Email" },
  { key: "address", label: "Физический адрес организации" },
  { key: "location", label: "Местоположение организации" },
  { key: "info", label: "Общая информация об организации" },
  { key: "name_legal", label: "Юридическое имя организации" },
  { key: "INN", label: "ИНН" },
  { key: "KPP", label: "КПП" },
  { key: "OGRN", label: "ОГРН" },
  { key: "OKPO", label: "ОКПО" },
  { key: "BIK", label: "БИК" },
  { key: "bank_name", label: "Название банка" },
  { key: "bank_address", label: "Адрес банка" },
  { key: "corr_account", label: "Корреспондентский счёт" },
  // { key: "employees", label: "Сотрудники" },
];

interface IOrganizationFormData {
  name: string; // Имя организации
  phone: string; // Телефон (возможно форматировать через маску)
  email: string; // Email
  address: string; // Физический адрес организации
  location: string; // Местоположение организации
  info: string; // Общая информация об организации
  name_legal: string; // Юридическое имя организации
  INN: string; // ИНН
  KPP: string; // КПП
  OGRN: string; // ОГРН
  OKPO: string; // ОКПО
  BIK: string; // БИК
  bank_name: string; // Название банка
  bank_address: string; // Адрес банка
  corr_account: string;
}

interface IOrganizationScreenCreateFormProps {
  setOrganization: (state: boolean) => void;
  setIsModalOpen: (state: boolean) => void;
}

const OrganizationScreenCreateForm: React.FC<
  IOrganizationScreenCreateFormProps
> = ({ setOrganization, setIsModalOpen }) => {
  // Инициализация формы из localStorage
  const formDefaultValues = useMemo(() => {
    // const savedData = localStorage.getItem(LOCAL_STORAGE_KEY_ORGANIZATION);
    // if (savedData) {
    //   const data = JSON.parse(savedData);
    //   setOrganizationType(data.type)
    //   return data;
    // }
    return {
      // type: organizationType,
      name: "",
      phone: "",
      email: "",
      address: "",
      location: "",
      info: "",
      name_legal: "",
      INN: "",
      KPP: "",
      OGRN: "",
      OKPO: "",
      BIK: "",
      bank_name: "",
      bank_address: "",
      corr_account: "",
      // employees: [""],
    };
  }, []);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formDefaultValues,
    mode: "onChange",
  });

  // useEffect(() => {
  //   // Сохраняем состояние формы в localStorage при каждом изменении
  //   const subscription = methods.watch((values) => {
  //     localStorage.setItem(
  //       LOCAL_STORAGE_KEY_ORGANIZATION,
  //       JSON.stringify(values)
  //     );
  //   });

  //   // Функция очистки
  //   return () => {
  //     subscription.unsubscribe(); // Вызов функции отписки
  //   };
  // }, [methods]);

  async function onSubmit(data: any) {
    // console.log(values);
    // try {
    //   const response = await OrganizationService.registration(data);
    //   // Проверяем статус ответа и очищаем форму, если статус в диапазоне от 200 до 204 включительно
    //   if (response.status >= 200 && response.status <= 204) {
    //     console.log("User created successfully:", response.data);
    //     localStorage.removeItem(LOCAL_STORAGE_KEY_ORGANIZATION);
    //     methods.reset({});
    //   }
    // } catch (error) {
    //   console.error("Failed to create user:", error.response);
    // }
  }

  return (
    <div>
      <h1 className="text-2xl font-medium mb-12">Добавить организацию</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-4 text-md"
      >
        {formFields
          ? formFields.map((item) => (
              <Controller
                key={item.key}
                name={item.key}
                control={control}
                render={({ field, fieldState }) => (
                  <CustomInput
                    className=""
                    fieldData={{
                      id: item.key,
                      name: item.key,
                      label: item.label,
                      placeholder: "",
                      type: "text",
                    }}
                    fieldValue={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                    required
                  />
                )}
              />
            ))
          : null}

        <div className="col-span-full flex justify-end">
          <Button
            onClick={() => {
              setOrganization(true);
              setIsModalOpen(false);
            }}
            className="col-start-2 col-end-3 col-span-1 bg-blue-500 text-white"
            type="submit"
          >
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrganizationScreenCreateForm;
