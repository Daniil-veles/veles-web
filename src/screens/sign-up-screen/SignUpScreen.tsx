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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function adaptUserData(userData: UserData): CreateUserRequest {
  const adaptedData: CreateUserRequest = {
    email: userData.email,
    password: userData.password,
    is_active: userData.isActive,
    is_superuser: userData.isSuperUser,
    is_verified: userData.isVerified,
    full_name: `${userData.firstName} ${userData.lastName}`,
    phone: userData.phone,
    picture: userData.picture,
    birth_date: userData.birthDate,
  };

  return adaptedData;
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().length(8, { message: "Пароль должен быть 8 символов." }),
  firstName: z.string().min(2, { message: "Имя обязательное." }),
  lastName: z.string().min(2, { message: "Фамилия обязательное." }),
  phone: z.string().min(10),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

type FormValues = z.infer<typeof schema>;

const SignUpScreen: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function createUser(data: FormValues) {
    const userData = {
      ...data,
      isActive: true,
      isSuperUser: false,
      isVerified: false,
      picture: "",
      fullName: "",
    };

    const formattedUserData: CreateUserRequest = adaptUserData(userData);
    console.log(formattedUserData);

    try {
      const response = await UserService.createUser(formattedUserData);
      console.log("User created successfully:", response);

      // Сбрасывает поля формы
      reset();
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
              <form onSubmit={handleSubmit(createUser)}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        {...register("firstName")}
                        // value={userData.firstName}
                        // onChange={handleChange}
                        id="first-name"
                        name="firstName"
                        placeholder="Max"
                        required
                      />
                      {errors.firstName && (
                        <span className="error">First name is required</span>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        {...register("lastName")}
                        // value={userData.lastName}
                        // onChange={handleChange}
                        id="last-name"
                        name="lastName"
                        placeholder="Robinson"
                        required
                      />
                      {errors.lastName && (
                        <span className="error">Last name is required</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        {...register("email")}
                        // value={userData.email}
                        // onChange={handleChange}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                      {errors.email && (
                        <span className="error">Email is required</span>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="tel">Phone</Label>
                      <Input
                        {...register("phone")}
                        // value={userData.phone}
                        // onChange={handleChange}
                        id="tel"
                        name="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                      {errors.phone && (
                        <span className="error">Phone is required</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        {...register("password")}
                        // value={userData.password}
                        // onChange={handleChange}
                        id="password"
                        name="password"
                        type="password"
                        required
                      />
                      {errors.password && (
                        <span className="error">Password must 8 cha</span>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        {...register("birthDate")}
                        // value={userData.birthDate}
                        // onChange={handleChange}
                        id="date"
                        name="birthDate"
                        type="date"
                        required
                      />
                      {errors.birthDate && (
                        <span className="error">Date is required</span>
                      )}
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
