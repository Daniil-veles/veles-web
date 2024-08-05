import Layout from "@/layouts/Layout";

import Link from "next/link";
import Container from "@/components/container/Container";
import LoginForm from "@/components/ui/login-form/LoginForm";
import { useState } from "react";

const LoginScreen: React.FC = () => {
  const [authPage, setAuthPage] = useState("login");

  return (
    <>
      <Layout title="Авторизация" description="Это главная страница сайта">
        <Container className="">
          <div className="w-full h-full flex items-center justify-center">
            <div className="mx-auto grid w-full max-w-md gap-6">
              <ul className="grid grid-cols-[40%_1fr] p-1 rounded-full border border-gray-200">
                <li className="">
                  <Link
                    className="block w-full bg-gray-200/30 py-3.5 px-4 rounded-full text-center font-medium"
                    href={"login"}
                  >
                    Войти
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="block w-full bg-gray-200/30 py-3.5 px-4 rounded-full text-center"
                    href={"sign-up"}
                  >
                    Зарегистрироваться
                  </Link>
                </li>
              </ul>

              <LoginForm />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default LoginScreen;
