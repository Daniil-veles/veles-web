import styles from "./SignUpScreen.module.scss";
import Layout from "@/layouts/Layout";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Container from "@/components/container/Container";
import React from "react";
import { UserService } from "@/services/user.service";
import { CreateUserRequest, UserData } from "@/types/types";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/ui/field/FormField";

function adaptUserData(userData: UserData): CreateUserRequest {
  const adaptedData: CreateUserRequest = {
    email: userData.email,
    password: userData.password,
    is_active: true,
    is_superuser: false,
    is_verified: false,
    full_name: `${userData.firstName} ${userData.lastName}`,
    phone: userData.phone,
    picture: userData.picture,
    birth_date: userData.birthDate,
  };

  return adaptedData;
}

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .length(8, { message: "Пароль должен быть 8 символов." })
    .regex(/^(?=.*[a-z])(?=.*[0-9]).+$/i, {
      message: "Пароль должен содержать как минимум одну цифру и одну букву.",
    }),
  firstName: z.string().min(2, { message: "Имя обязательное." }),
  lastName: z.string().min(2, { message: "Фамилия обязательное." }),
  phone: z
    .string()
    .min(10, { message: "Телефон должен быть 10 символов." })
    .regex(/^\d{10}$/, {
      message: "Телефон должен содержать только цифры.",
    }),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

type FormValues = z.infer<typeof schema>;

const SignUpScreen: React.FC = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      birthDate: "",
    },
  });

  async function createUser(data: FormValues) {
    const userData = {
      ...data,
      picture: "",
      fullName: "",
    };

    const formattedUserData: CreateUserRequest = adaptUserData(userData);
    console.log(formattedUserData);

    try {
      const response = await UserService.createUser(formattedUserData);
      console.log("User created successfully:", response);

      // Сбрасывает поля формы
      methods.reset();
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <>
      <Layout title="Регистрация" description="Это главная страница сайта">
        <Container className={styles.customContainer}>
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(createUser)}>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <FormField
                          id="first-name"
                          name="firstName"
                          label="First name"
                          placeholder="Max"
                          required
                          componentType="input"
                        />
                      </div>

                      <div className="grid gap-2">
                        <FormField
                          id="last-name"
                          name="lastName"
                          label="Last name"
                          placeholder="Robinson"
                          required
                          componentType="input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <FormField
                          id="email"
                          name="email"
                          label="Email"
                          placeholder="Roden"
                          type="email"
                          required
                          componentType="input"
                        />
                      </div>

                      <div className="grid gap-2">
                        <FormField
                          id="tel"
                          name="phone"
                          label="Phone number"
                          placeholder="7 (___) ___-__-__"
                          type="tel"
                          required
                          componentType="input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <FormField
                          id="password"
                          name="password"
                          label="Password"
                          placeholder="****"
                          type="password"
                          required
                          componentType="input"
                        />
                      </div>

                      <div className="grid gap-2">
                        <FormField
                          id="date"
                          name="birthDate"
                          label="Date"
                          placeholder="22.06.1990"
                          type="date"
                          required
                          componentType="input"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Create an account
                    </Button>

                    {/* <Button variant="outline" className="w-full">
                  Sign up with GitHub
                </Button> */}
                  </div>
                </form>
              </FormProvider>

              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Layout>
    </>
  );
};

export default SignUpScreen;
