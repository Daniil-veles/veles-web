import React, { useEffect, useMemo, useState } from "react";
import {
  createFormValidation,
  createFormFields,
  organizationSelect,
} from "./utils";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../custom-input/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../button";
// import { OrganizationType } from "./OrganizationScreenCreateForm";

const OrganizationScreenCreateForm: React.FC = () => {
  // const [organizationType, setOrganizationType] =
  //   useState<OrganizationType>("ООО");

  // // Меморизируем схему и поля формы, чтобы они пересоздавались только при изменении типа организации
  // const formSchema = useMemo(
  //   () => createFormValidation(organizationType),
  //   [organizationType]
  // );
  // const organizationFormFields = useMemo(
  //   () => createFormFields(formSchema),
  //   [formSchema]
  // );
  // console.log(`Поля формы для ${organizationType}:`, organizationFormFields);

  // Инициализация формы из localStorage
  // const formDefaultValues = useMemo(() => {
  //   // const savedData = localStorage.getItem(LOCAL_STORAGE_KEY_ORGANIZATION);
  //   // if (savedData) {
  //   //   const data = JSON.parse(savedData);
  //   //   setOrganizationType(data.type)
  //   //   return data;
  //   // }
  //   return {
  //     type: organizationType,
  //     name: "",
  //     phone: "",
  //     email: "",
  //     address: "",
  //     location: "",
  //     info: "",
  //     name_legal: "",
  //     INN: "",
  //     KPP: "",
  //     OGRN: "",
  //     OKPO: "",
  //     BIK: "",
  //     bank_name: "",
  //     bank_address: "",
  //     corr_account: "",
  //     employees: [""],
  //   };
  // }, [organizationType]);

  // Hook форма.
  // const methods = useForm<z.infer<typeof formSchema>>({
  //   mode: "onChange",
  //   resolver: zodResolver(formSchema),
  //   defaultValues: initialValues,
  // });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: ''
    },
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

  // async function onSubmit(data: z.infer<typeof formSchema>) {
  //   // console.log(values);
  //   try {
  //     const response = await OrganizationService.registration(data);

  //     // Проверяем статус ответа и очищаем форму, если статус в диапазоне от 200 до 204 включительно
  //     if (response.status >= 200 && response.status <= 204) {
  //       console.log("User created successfully:", response.data);

  //       localStorage.removeItem(LOCAL_STORAGE_KEY_ORGANIZATION);
  //       methods.reset({});
  //     }
  //   } catch (error) {
  //     console.error("Failed to create user:", error.response);
  //   }
  // }

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-4 gap-4 text-md"
    >
      <div>
        <h1>dsdsds</h1>
      </div>
      {/* {organizationFormFields
        ? organizationFormFields.map((field) => (
            <Controller
              key={field.key}
              name={field.key} 
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  className=""
                  fieldData={{
                    id: field.key, 
                    name: field.key, 
                    label: field.label,
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
        : null} */}

      <div className="row-start-auto row-end-auto col-span-full grid grid-cols-3 gap-4">
        <Button
          className="col-start-2 col-end-3 col-span-1 bg-blue-500 text-white"
          type="submit"
        >
          Отправить
        </Button>
      </div>
    </form>
  );
};
