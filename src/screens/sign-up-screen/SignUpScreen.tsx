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
import React, { useState } from "react";
import { UserService } from "@/services/user.service";

const SignUpScreen: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "dsd@mail.ru",
    password: "ddsd",
    isActive: true,
    isSuperUser: false,
    isVerified: false,
    fullName: "",
    firstName: "dsd",
    lastName: "ds",
    phone: "dsds",
    picture: "",
    birthDate: "",
  });

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;

    if (name === "firstName" || name === "lastName") {
      const firstName = name === "firstName" ? value : userData["firstName"];
      const lastName = name === "lastName" ? value : userData["lastName"];

      setUserData((prevUserData) => ({
        ...prevUserData,
        fullName: `${firstName} ${lastName}`,
        [name]: value,
      }));

      return;
    }

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    console.log(userData);
  }

  async function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    const { firstName, lastName, ...data } = userData;

    console.log(data);

    // const result = UserService.createUser(data);
    // console.log(result);

    try {
      const response = await UserService.createUser(data);
      console.log("User created successfully:", response);
    } catch (error) {
      console.error("Failed to create user:", error);
      // Обработка ошибок, например, показ сообщения пользователю
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
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        value={userData.firstName}
                        onChange={handleChange}
                        id="first-name"
                        name="firstName"
                        placeholder="Max"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        value={userData.lastName}
                        onChange={handleChange}
                        id="last-name"
                        name="lastName"
                        placeholder="Robinson"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        value={userData.email}
                        onChange={handleChange}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="tel">Phone</Label>
                      <Input
                        value={userData.phone}
                        onChange={handleChange}
                        id="tel"
                        name="phone"
                        type="tel"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        value={userData.password}
                        onChange={handleChange}
                        id="password"
                        name="password"
                        type="password"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        value={userData.birthDate}
                        onChange={handleChange}
                        id="date"
                        name="birthDate"
                        type="date"
                        required
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
