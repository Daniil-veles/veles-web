// import styles from './AddOrganizationForm.module.scss';

import { useEffect, useMemo, useState } from "react";
import {
  createFormValidation,
  createFormFields,
  organizationSelect,
} from "./utils";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField, { ComponentFormEnum } from "../form-field/FormField";
import { Button } from "../button";
import { OrganizationType } from "./CreateOrganizationForm.interface";
import { LOCAL_STORAGE_KEY_ORGANIZATION } from "@/const/const";
import { organizationService } from "@/services/organisation.service";

const CreateOrganizationForm: React.FC = () => {
  const [organizationType, setOrganizationType] =
    useState<OrganizationType>("ООО");

  // Меморизируем схему и поля формы, чтобы они пересоздавались только при изменении типа организации
  const formSchema = useMemo(
    () => createFormValidation(organizationType),
    [organizationType]
  );
  const formFields = useMemo(() => createFormFields(formSchema), [formSchema]);
  // console.log(`Поля формы для ${organizationType}:`, formFields);

  // Инициализация формы из localStorage
  const initialValues = useMemo(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY_ORGANIZATION);
    if (savedData) {
      return JSON.parse(savedData);
    }
    return {
      type: organizationType,
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
      employees: [""],
    };
  }, [organizationType]);

  // Hook форма.
  const methods = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    // Сохраняем состояние формы в localStorage при каждом изменении
    const subscription = methods.watch((values) => {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_ORGANIZATION,
        JSON.stringify(values)
      );
    });

    // Функция очистки
    return () => {
      subscription.unsubscribe(); // Вызов функции отписки
    };
  }, [methods]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    // console.log(values);
    try {
      const response = await organizationService.registration(data);

      // Проверяем статус ответа и очищаем форму, если статус в диапазоне от 200 до 204 включительно
      if (response.status >= 200 && response.status <= 204) {
        console.log("User created successfully:", response.data);

        localStorage.removeItem(LOCAL_STORAGE_KEY_ORGANIZATION);
        methods.reset({});
      }
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-4 text-md"
      >
        <div className="row-span-full col-span-full">
          {/* <FormField
            id={organizationSelect.name}
            name={organizationSelect.name}
            label={organizationSelect.label}
            placeholder={organizationSelect.placeholder}
            componentType={ComponentFormEnum.SELECT}
            options={organizationSelect.options}
            defaultValue={organizationSelect.options[0].value}
            onValueChange={(value) =>
              setOrganizationType(value as OrganizationType)
            }
          /> */}
        </div>

        {formFields.map((field) => (
          <FormField
            key={field.name}
            id={field.name}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            componentType={field.type}
          />
        ))}

        <div className="row-start-auto row-end-auto col-span-full grid grid-cols-3 gap-4">
          <Button
            className="col-start-2 col-end-3 col-span-1 bg-bg-fourth text-white"
            type="submit"
          >
            Отправить
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateOrganizationForm;
