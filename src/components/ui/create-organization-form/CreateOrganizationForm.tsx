// import styles from './AddOrganizationForm.module.scss';

import { useState } from "react";
import {
  createFormValidation,
  fields,
  organizationSelect,
  OrganizationType,
} from "./utils";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "../form-field/FormField";
import { Button } from "../button";

const createFormFields = (formSchema: OrganizationType) => {
  const schema = formSchema; // Создаем схему для указанного типа организации

  // Фильтруем поля формы на основе наличия их в схеме
  const formFields = fields.filter(
    (field) => schema.shape[field.name] !== undefined
  );

  return formFields;
};

const CreateOrganizationForm: React.FC = () => {
  const [organizationType, setOrganizationType] = useState(
    organizationSelect.options[0].value
  );
  const [formData, setFormData] = useState<any>({
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
  });

  // Cоздает поля формы и схему валидации для организации по Орг. структуре
  const formSchema = createFormValidation(organizationType as OrganizationType);
  const formFields = createFormFields(formSchema);
  console.log(`Поля формы для ${organizationType}:`, formFields);

  // 1. Создаем hook форму.
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formData,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Optionally, perform form submission logic here
    // reset(); // Reset form after submission
    setFormData({ ...formData, ...values });
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-4"
      >
        <div className="row-span-full col-span-full">
          <FormField
            id={organizationSelect.name}
            name={organizationSelect.name}
            label={organizationSelect.label}
            placeholder={organizationSelect.placeholder}
            componentType="select"
            options={organizationSelect.options}
          />
        </div>

        {/* <FormField
          key={organizationSelect.name}
          control={control}
          name={organizationSelect.name as keyof z.infer<typeof formSchema>}
          render={() => (
            <FormItem className="row-span-full col-span-full">
              <FormLabel>{organizationSelect.label}</FormLabel>
              <FormControl>
                <Select
                  defaultValue={organizationSelect.options[0].value}
                  onValueChange={(value) => setOrganizationType(value)}
                >
                  <SelectTrigger className="text-left">
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    {organizationSelect.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* {formFields.map((field) => (
          <FormField
            key={field.name}
            control={control}
            name={field.name as keyof z.infer<typeof formSchema>}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input placeholder={field.placeholder} {...formField} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))} */}

        <div className="row-start-auto row-end-auto col-span-full grid grid-cols-3 gap-4">
          <Button className="col-start-2 col-end-3 col-span-1" type="submit">
            Отправить
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateOrganizationForm;
