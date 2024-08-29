import Layout from "@/layouts/Layout";

import Container from "@/components/container/Container";
import LoginForm from "@/components/ui/login-form/LoginForm";
import SignUpForm from "@/components/ui/sign-up-form/SignUpForm";
import cn from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../loading/Loading";
import ForgotPasswordForm from "@/components/elements/forgot-password-form/ForgotPasswordForm";
import ResetPasswordWrapper from "@/components/elements/reset-password-wrapper/ResetPasswordWrapper";
import { useAppSelector } from "@/hooks";
import { AuthorizationStatus } from "@/types/state.interface";
import ScreenTitle from "@/components/ui/screen-title/ScreenTitle";
import Image from "next/image";

const authRoutes = ["login", "sign-up", "forgot-password", "reset-password"];

// {
//   id: "intro",
//   name: "intro",
//   label: "Параметры входа",
//   placeholder: "Выберите организацию",
//   componentType: ComponentFormEnum.SELECT,
//   options: [
//     { label: "Личный кабинет", value: "user" },
//     { label: "СК Велесъ", value: "5030100587" },
//   ]
// },

const AuthScreen: React.FC = () => {
  const authStatus = useAppSelector((state) => state.USER.isAuth);
  console.log(authStatus);

  const router = useRouter();
  const { route } = router.query;

  useEffect(() => {
    if (!route || !authRoutes.includes(route as string)) {
      router.push("/auth/login");
    }
  }, [route, router]);

  if (!route || !authRoutes.includes(route as string)) {
    return <Loading />;
  }

  return (
    <>
      <Layout title="Авторизация" description="Это главная страница сайта">
        <Container className="">
          <div className="w-full h-full flex items-center justify-center">
            {authStatus === AuthorizationStatus.Auth ? (
              <div className="mb-20">
                <ScreenTitle
                  className="text-2xl text-center mb-6"
                  title="Войти"
                />

                <ul className="flex flex-col gap-5">
                  <li className="flex items-center min-w-[300px] p-4 px-8 bg-gray-200/30 hover:bg-gray-200/40 rounded-lg">
                    <div className="relative w-10 h-10 mr-3">
                      <Image
                        src="/userIcon.webp"
                        alt="Logo"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    <div>
                      <p>Суворов Даниил Сергеевич</p>
                    </div>
                  </li>

                  <li className="flex items-center min-w-[300px]  p-4 px-8 bg-gray-200/30 hover:bg-gray-200/40 rounded-lg">
                    <div className="relative w-10 h-10 mr-3">
                      <Image
                        src="/header-logo.png"
                        alt="Logo"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    <div>
                      <p>СК ВЕЛЕСЪ</p>
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="mx-auto grid w-full max-w-[480px]">
                {route === "login" || route === "sign-up" ? (
                  <ul className="grid grid-cols-[40%_1fr] p-1 rounded-full border border-gray-200 mb-6">
                    <li className="">
                      <button
                        className={cn(
                          "block w-full py-3 px-4 rounded-full text-center",
                          route === "login"
                            ? "bg-gray-200/30 font-medium"
                            : null
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
                          route === "sign-up"
                            ? "bg-gray-200/30 font-medium"
                            : null
                        )}
                        onClick={() => router.push("/auth/sign-up")}
                      >
                        Зарегистрироваться
                      </button>
                    </li>
                  </ul>
                ) : null}

                {route === "login" ? (
                  <LoginForm />
                ) : route === "sign-up" ? (
                  <SignUpForm />
                ) : route === "forgot-password" ? (
                  <ForgotPasswordForm />
                ) : route == "reset-password" ? (
                  <ResetPasswordWrapper />
                ) : null}
              </div>
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default AuthScreen;
