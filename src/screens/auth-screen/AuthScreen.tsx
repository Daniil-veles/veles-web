import Layout from "@/layouts/Layout";
import LoginForm from "@/components/ui/login-form/LoginForm";
import SignUpForm from "@/components/ui/sign-up-form/SignUpForm";
import cn from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ResetPasswordWrapper from "@/components/elements/reset-password-wrapper/ResetPasswordWrapper";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { AuthorizationStatus } from "@/types/state.interface";
import Image from "next/image";
import { AuthService } from "@/services/auth.service";
import ForgotPasswordForm from "@/components/elements/forgot-password-form/ForgotPasswordForm";
import { setAuthStatus } from "@/store/slices/authSlice";
import { getAccessToken } from "@/utils/utils";

const AuthScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.USER.isAuth);
  const router = useRouter();
  const { route } = router.query;

  useEffect(() => {
    const token = getAccessToken();
    console.log("Токен авторизации:", token);

    // const isAuth = AuthService.checkAuthStatus(token);

    // Мокаем проверку авторизации
    const isAuth = false;

    if (isAuth) {
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    }

  }, [dispatch]);


  // Перенаправляет пользователя если он авторизован
  // useEffect(() => {
  //   if (authStatus === AuthorizationStatus.Auth) {
  //       router.push("/dasboard");
  //   }
  // }, [authStatus, router]);

  return (
    <>
      <Layout title="Авторизация" description="Это главная страница сайта">
        <div className="w-full grow grid grid-cols-2 rounded-3xl bg-white overflow-hidden">
          <div className="bg-c-blue flex flex-col justify-center p-20 px-10">
            <div className="flex mb-8">
              <img className="bg-white mr-3 w-10 h-10" src="/header-logo.png" />

              <h3 className="text-3xl text-white">Главная страница</h3>
            </div>

            <img className="w-full h-3/4" src="/auth-logo.webp" />
          </div>

          <div className="w-2/3 h-full mx-auto flex flex-col justify-center">
            {route === "login" || route === "sign-up" ? (
              <ul className="grid grid-cols-[40%_1fr] p-1 rounded-full border border-c-gray mb-6 h-min">
                <li className="">
                  <button
                    className={cn(
                      "block w-full py-3 px-4 rounded-full text-center",
                      route === "login" ? "bg-c-gray font-medium" : null
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
                      route === "sign-up" ? "bg-c-gray font-medium" : null
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
