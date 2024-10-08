import Layout from "@/layouts/Layout";
import LoginForm from "@/components/ui/login-form/LoginForm";
import SignUpForm from "@/components/ui/sign-up-form/SignUpForm";
import ResetPasswordWrapper from "@/components/elements/reset-password-wrapper/ResetPasswordWrapper";
import ForgotPasswordForm from "@/components/ui/forgot-password-form/ForgotPasswordForm";
import cn from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/hooks";
import { AuthorizationStatus } from "@/types/state.interface";
import Link from "next/link";

const AuthScreen: React.FC = () => {
  const { authStatus } = useAuth();
  const router = useRouter();
  const { route } = router.query;

  useEffect(() => {
    const checkAuth = async () => {
      if (authStatus === AuthorizationStatus.Auth) {
        // Перенаправляет пользователя на профиль
        router.push("/profile");
      }
    };

    checkAuth();
  }, [authStatus, router]);

  return (
    <>
      <Layout className="p-5 pb-8" title="Авторизация" description="Это главная страница сайта">
        <div className="w-full grow grid grid-cols-2 rounded-3xl bg-white overflow-hidden">
          <div className="bg-c-blue-500 flex flex-col justify-center items-center">
            <div className="w-3/4">
              <Link href={"/"} className="flex mb-8">
                <img
                  className="bg-white mr-3 w-10 h-10"
                  src="/header-logo.png"
                />
              </Link>

              <img className="w-full ratio-square" src="/auth-logo.webp" />
            </div>
          </div>

          <div className="w-2/3 h-full mx-auto flex flex-col justify-center">
            {route === "login" || route === "sign-up" ? (
              <ul className="grid grid-cols-[40%_1fr] p-1 rounded-full border border-c-gray-500 mb-6 h-min">
                <li className="">
                  <button
                    className={cn(
                      "block w-full py-2 px-3 rounded-full text-center",
                      route === "login" ? "bg-c-gray-500 font-medium" : null
                    )}
                    onClick={() => router.push("/auth/login")}
                  >
                    Войти
                  </button>
                </li>

                <li className="">
                  <button
                    className={cn(
                      "block w-full py-2 px-3 rounded-full text-center",
                      route === "sign-up" ? "bg-c-gray-500 font-medium" : null
                    )}
                    onClick={() => router.push("/auth/sign-up")}
                  >
                    Зарегистрироваться
                  </button>
                </li>
              </ul>
            ) : null}

            {route === "login" && <LoginForm />}
            {route === "sign-up" && <SignUpForm />}
            {route === "forgot-password" && <ForgotPasswordForm />}
            {route === "reset-password" && <ResetPasswordWrapper />}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AuthScreen;
