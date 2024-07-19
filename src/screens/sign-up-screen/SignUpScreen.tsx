// import styles from "./SignUpScreen.module.scss";
import Layout from "@/layouts/Layout";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/container/Container";
import React from "react";
import SignUpForm from "@/components/ui/sign-up-form/SignUpForm";

const SignUpScreen: React.FC = () => {
  return (
    <>
      <Layout title="Регистрация" description="Это главная страница сайта">
        <Container className="grid grid-cols-[44%_1fr] gap-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignUpForm />

              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden">
            <img className="w-full h-full bg-bg-fourth" src="" alt="" />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default SignUpScreen;
