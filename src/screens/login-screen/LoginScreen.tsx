import Layout from "@/layouts/Layout";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Container from "@/components/container/Container";
import LoginForm from "@/components/ui/login-form/LoginForm";

const LoginScreen: React.FC = () => {
  return (
    <>
      <Layout title="Авторизация" description="Это главная страница сайта">
        <Container className="">
          <div className="w-full h-full grid grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Login</h1>
                  <p className="text-balance text-muted-foreground">
                    Enter your email below to login to your account
                  </p>
                </div>

                <LoginForm />

                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="#" className="underline">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden bg-muted lg:block">
              <Image
                src="/placeholder.svg"
                alt="Image"
                width="1920"
                height="1080"
                className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default LoginScreen;
