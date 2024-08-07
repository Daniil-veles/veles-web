import Layout from "@/layouts/Layout";

import Container from "@/components/container/Container";
import LoginForm from "@/components/ui/login-form/LoginForm";
import SignUpForm from "@/components/ui/sign-up-form/SignUpForm";
import cn from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";

const authRoutes = ["login", "sign-up"];

const AuthScreen: React.FC = () => {
  const router = useRouter();
  const { route } = router.query;
  // console.log(route);

  useEffect(() => {
    if (!route || !authRoutes.includes(route as string)) {
      router.push("/auth/login");
    }
  }, [route, router]);

  if (!route || !authRoutes.includes(route as string)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout title="Авторизация" description="Это главная страница сайта">
        <Container className="">
          <div className="w-full h-full flex items-center justify-center">
            <div className="mx-auto grid w-full max-w-[480px] gap-6">
              <ul className="grid grid-cols-[40%_1fr] p-1 rounded-full border border-gray-200">
                <li className="">
                  <button
                    className={cn(
                      "block w-full py-3 px-4 rounded-full text-center",
                      route === "login" ? "bg-gray-200/30 font-medium" : null
                    )}
                    onClick={() => router.push("/auth/login")}
                  >
                    Войти
                  </button>
                </li>
                <li className="">
                  <button
                    className={cn(
                      "block w-full py-3 px-4 rounded-full text-center",
                      route === "sign-up" ? "bg-gray-200/30 font-medium" : null
                    )}
                    onClick={() => router.push("/auth/sign-up")}
                  >
                    Зарегистрироваться
                  </button>
                </li>
              </ul>

              {route === "login" ? <LoginForm /> : <SignUpForm />}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default AuthScreen;
