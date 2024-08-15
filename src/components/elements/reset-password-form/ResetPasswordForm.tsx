// // import styles from './ForgotPasswordForm.module.scss';

// import { Button } from "@/components/ui/button";
// import FormField from "@/components/ui/form-field/FormField";
// import { AuthService } from "@/services/auth.service";
// import { UserService } from "@/services/user.service";
// import { ComponentFormEnum } from "@/types/types.interface";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { CircleArrowLeft } from "lucide-react";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { FormProvider, useForm } from "react-hook-form";
// import { z } from "zod";

// const ResetPasswordForm: React.FC = () => {
//   const [resetToken, setResetToken] = useState({
//     token: "",
//   });
//   const [isTokenAdd, setIsTokenAdd] = useState(false);

//   const router = useRouter();
//   const resetKeySchema = z.object({
//     key: z.string().length(5, { message: "Код должен быть 5 символов." }),
//   });

//   const resetPasswordSchema = z
//     .object({
//       password: z
//         .string()
//         .length(8, { message: "Пароль должен быть 8 символов." })
//         .regex(/^(?=.*[a-z])(?=.*[0-9]).+$/i, {
//           message: "Неверный формат пароля.",
//         }),
//       confirmPassword: z
//         .string()
//         .length(8, { message: "Пароль должен быть 8 символов." })
//         .regex(/^(?=.*[a-z])(?=.*[0-9]).+$/i, {
//           message: "Неверный формат пароля.",
//         }),
//     })
//     .refine((data) => data.password === data.confirmPassword, {
//       path: ["confirmPassword"],
//       message: "Пароли не совпадают",
//     });

//   const methodsKey = useForm({
//     mode: "onChange",
//     resolver: zodResolver(resetKeySchema),
//     defaultValues: {
//       key: "",
//     },
//   });

//   const methodsPassword = useForm({
//     mode: "onChange",
//     resolver: zodResolver(resetPasswordSchema),
//     defaultValues: {
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   async function onSubmitKey(data: { key: string }) {
//     try {
//       console.log(data);
//       setIsTokenAdd(true);
//       setResetToken({ ...resetToken, token: data.key });

//       methodsKey.reset();
//     } catch (error) {
//       console.error("Failed to create user:", error.response);
//     }
//   }

//   async function onSubmitPassword(data: {
//     password: string;
//     confirmPassword: string;
//   }) {
//     try {
//       console.log(data);

//       //   const response = await AuthService.forgotPassword(data);
//       //   console.log(response);

//       //   if (response.status == 202) {
//       //     router.push("/auth/reset-password");
//       //     methods.reset();
//       //   }
//     } catch (error) {
//       console.error("Failed to create user:", error.response);
//     }
//   }

//   return (
//     <>
//       <button
//         className="flex text-gray-500 hover:text-blue-700 py-2 mb-2"
//         onClick={() => router.back()}
//       >
//         <CircleArrowLeft className="mr-1.5" />
//         Вернуться
//       </button>

//       <h3 className="text-2xl mb-4 text-center">Сбросить пароль</h3>

//       {!isTokenAdd ? (
//         <FormProvider {...methodsKey}>
//           <form
//             className="mb-2"
//             onSubmit={methodsKey.handleSubmit(onSubmitKey)}
//           >
//             <div className="grid gap-2">
//               <div className="grid gap-4">
//                 <FormField
//                   value={{
//                     id: "key",
//                     name: "key",
//                     label: "Код",
//                     placeholder: "Введите код",
//                     type: "text",
//                     componentType: ComponentFormEnum.INPUT,
//                     required: true,
//                   }}
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full h-min text-base py-4 bg-blue-500 text-white rounded-full font-normal mt-3"
//               >
//                 Отправить
//               </Button>
//             </div>
//           </form>
//         </FormProvider>
//       ) : (
//         <FormProvider {...methodsPassword}>
//           <form
//             className="mb-2"
//             onSubmit={methodsPassword.handleSubmit(onSubmitPassword)}
//           >
//             <div className="grid gap-2">
//               <div className="grid gap-4">
//                 <FormField
//                   value={{
//                     id: "password",
//                     name: "password",
//                     label: "Новый пароль",
//                     placeholder: "***",
//                     type: "password",
//                     componentType: ComponentFormEnum.INPUT,
//                     required: true,
//                   }}
//                 />

//                 <FormField
//                   value={{
//                     id: "confirmPassword",
//                     name: "confirmPassword",
//                     label: "Подтвердите пароль",
//                     placeholder: "***",
//                     type: "password",
//                     componentType: ComponentFormEnum.INPUT,
//                     required: true,
//                   }}
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full h-min text-base py-4 bg-blue-500 text-white rounded-full font-normal mt-3"
//               >
//                 Сбросить
//               </Button>
//             </div>
//           </form>
//         </FormProvider>
//       )}
//     </>
//   );
// };

// export default ResetPasswordForm;

import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field/FormField";
import { ComponentFormEnum } from "@/types/types.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const ResetPasswordForm: React.FC = () => {
  const router = useRouter();

  // Объединенная схема валидации
  const resetPasswordSchema = z
    .object({
      key: z.string().length(5, { message: "Код должен быть 5 символов." }),
      password: z
        .string()
        .length(8, { message: "Пароль должен быть 8 символов." })
        .regex(/^(?=.*[a-z])(?=.*[0-9]).+$/i, {
          message: "Неверный формат пароля.",
        }),
      confirmPassword: z
        .string()
        .length(8, { message: "Пароль должен быть 8 символов." })
        .regex(/^(?=.*[a-z])(?=.*[0-9]).+$/i, {
          message: "Неверный формат пароля.",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Пароли не совпадают",
    });

  // Один хук useForm для всех полей
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      key: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Обработка отправки формы
  async function onSubmit(data: {
    key: string;
    password: string;
    confirmPassword: string;
  }) {
    try {
      console.log("Форма отправлена с данными:", data);

      // Здесь можно вызвать метод для сброса пароля
      // Например:
      // const response = await AuthService.resetPassword(data);
      // if (response.status === 200) {
      //   router.push("/auth/success");
      //   methods.reset();
      // }

      // Сброс формы после успешной отправки
      methods.reset();
    } catch (error) {
      console.error("Ошибка при сбросе пароля:", error);
    }
  }

  return (
    <>
      <button
        className="flex text-gray-500 hover:text-blue-700 py-2 mb-2"
        onClick={() => router.back()}
      >
        <CircleArrowLeft className="mr-1.5" />
        Вернуться
      </button>

      <h3 className="text-2xl mb-4 text-center">Сбросить пароль</h3>

      <FormProvider {...methods}>
        <form className="mb-2" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-4">
              <FormField
                value={{
                  id: "key",
                  name: "key",
                  label: "Код",
                  placeholder: "Введите код",
                  type: "text",
                  componentType: ComponentFormEnum.INPUT,
                  required: true,
                }}
              />

              <FormField
                value={{
                  id: "password",
                  name: "password",
                  label: "Новый пароль",
                  placeholder: "***",
                  type: "password",
                  componentType: ComponentFormEnum.INPUT,
                  required: true,
                }}
              />

              <FormField
                value={{
                  id: "confirmPassword",
                  name: "confirmPassword",
                  label: "Подтвердите пароль",
                  placeholder: "***",
                  type: "password",
                  componentType: ComponentFormEnum.INPUT,
                  required: true,
                }}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-min text-base py-4 bg-blue-500 text-white rounded-full font-normal mt-3"
            >
              Сбросить
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ResetPasswordForm;
