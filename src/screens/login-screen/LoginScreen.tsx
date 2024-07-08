"use client";

import Layout from "@/layouts/Layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Container from "@/components/container/Container";

// Создание схемы валидации с помощью Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Имя обязательно." }),
  phone: z.string().regex(/^(?:\+7|8)\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/, {
    message: "Неверный формат телефона. Пример: +7 (123) 456-78-90 или 8 (123) 456-78-90.",
  }),
  email: z.string().email({ message: "Неверный адрес электронной почты." }),
  address: z.string().min(1, { message: "Адрес обязателен." }),
  location: z.string().min(1, { message: "Местоположение обязательно." }),
  info: z.string().min(1, { message: "Информация обязательна." }),
  type: z.string().min(1, { message: "Тип обязателен." }),
  name_legal: z.string().min(1, { message: "Юридическое имя обязательно." }),
  INN: z.string().min(1, { message: "ИНН обязателен." }),
  KPP: z.string().min(1, { message: "КПП обязателен." }),
  OGRN: z.string().min(1, { message: "ОГРН обязателен." }),
  OKPO: z.string().min(1, { message: "ОКПО обязательно." }),
  BIK: z.string().min(1, { message: "БИК обязателен." }),
  bank_name: z.string().min(1, { message: "Название банка обязательно." }),
  bank_address: z.string().min(1, { message: "Адрес банка обязателен." }),
  corr_account: z
    .string()
    .min(1, { message: "Корреспондентский счёт обязателен." }),
  employees: z
    .array(z.string())
    .nonempty({ message: "Как минимум один сотрудник обязателен." }),
});

const fields = [
  { name: "name", label: "Имя", placeholder: "Введите имя" },
  { name: "phone", label: "Телефон", placeholder: "Введите телефон" },
  { name: "email", label: "Email", placeholder: "Введите email" },
  { name: "address", label: "Адрес", placeholder: "Введите адрес" },
  {
    name: "location",
    label: "Местоположение",
    placeholder: "Введите местоположение",
  },
  { name: "info", label: "Информация", placeholder: "Введите информацию" },
  { name: "type", label: "Тип", placeholder: "Введите тип" },
  {
    name: "name_legal",
    label: "Юридическое имя",
    placeholder: "Введите юридическое имя",
  },
  { name: "INN", label: "ИНН", placeholder: "Введите ИНН" },
  { name: "KPP", label: "КПП", placeholder: "Введите КПП" },
  { name: "OGRN", label: "ОГРН", placeholder: "Введите ОГРН" },
  { name: "OKPO", label: "ОКПО", placeholder: "Введите ОКПО" },
  { name: "BIK", label: "БИК", placeholder: "Введите БИК" },
  {
    name: "bank_name",
    label: "Название банка",
    placeholder: "Введите название банка",
  },
  {
    name: "bank_address",
    label: "Адрес банка",
    placeholder: "Введите адрес банка",
  },
  {
    name: "corr_account",
    label: "Корреспондентский счёт",
    placeholder: "Введите корреспондентский счёт",
  },
  {
    name: "employees",
    label: "Сотрудники",
    placeholder: "Введите сотрудников через запятую",
  },
];

const LoginScreen: React.FC = () => {
  // 1. Определение формы.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      location: "",
      info: "",
      type: "",
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
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-3 gap-4"
                >
                  {fields.map((field) => (
                    <FormField
                      key={field.name}
                      control={form.control}
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

                  <Button className="col-start-2 col-end-3" type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default LoginScreen;
