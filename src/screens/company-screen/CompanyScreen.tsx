"use client";

import Layout from "@/layouts/Layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Container from "@/components/container/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import {
  createFormValidation,
  fields,
  organizationSelect,
  OrganizationType,
} from "./utils";

const createFormFields = (formSchema: OrganizationType) => {
  const schema = formSchema; // Создаем схему для указанного типа организации

  // Фильтруем поля формы на основе наличия их в схеме
  const formFields = fields.filter(
    (field) => schema.shape[field.name] !== undefined
  );

  return formFields;
};

const CompanyScreen: React.FC = () => {
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
  const { handleSubmit, control, ...form } = useForm<
    z.infer<typeof formSchema>
  >({
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
    <div className="">
      <Layout>
        <Container>
          <div className="grid grid-cols-[20%_1fr] gap-10 py-4">
            <div className="w-full">
              <img className="bg-fourth h-full" src="" alt="" />
            </div>

            <div className="w-full">
              <h2 className="text-center mb-3">Регистрация</h2>

              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-3 gap-4"
                >
                  <FormField
                    key={organizationSelect.name}
                    control={control}
                    name={
                      organizationSelect.name as keyof z.infer<
                        typeof formSchema
                      >
                    }
                    render={() => (
                      <FormItem className="row-span-full col-span-full">
                        <FormLabel>{organizationSelect.label}</FormLabel>
                        <FormControl>
                          <Select
                            defaultValue={organizationSelect.options[0].value}
                            onValueChange={(value) =>
                              setOrganizationType(value)
                            }
                          >
                            <SelectTrigger className="text-left">
                              <SelectValue placeholder="Выберите тип" />
                            </SelectTrigger>
                            <SelectContent>
                              {organizationSelect.options.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {formFields.map((field) => (
                    <FormField
                      key={field.name}
                      control={control}
                      name={field.name as keyof z.infer<typeof formSchema>}
                      render={({ field: formField }) => (
                        <FormItem>
                          <FormLabel>{field.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={field.placeholder}
                              {...formField}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

                  <div className="row-start-auto row-end-auto col-span-full grid grid-cols-3 gap-4">
                    <Button
                      className="col-start-2 col-end-3 col-span-1"
                      type="submit"
                    >
                      Отправить
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default CompanyScreen;
