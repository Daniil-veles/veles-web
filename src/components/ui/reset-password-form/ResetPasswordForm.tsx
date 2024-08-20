import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field/FormField";
import { ComponentFormEnum } from "@/types/types.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import ButtonForm from "../custom-button/button-form/ButtonForm";

// Схема валидации для сброса пароля
const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Пароль должен быть минимум 8 символов." })
      .regex(/^(?=.*[a-z])(?=.*[0-9]).+$/i, {
        message: "Пароль должен содержать буквы и цифры.",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Пароль должен быть минимум 8 символов." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Пароли не совпадают",
  });

const ResetPasswordForm: React.FC<{
  onSubmit: (data: { password: string; confirmPassword: string }) => void;
}> = ({ onSubmit }) => {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="mb-2" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
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

          <ButtonForm className="w-full h-min mt-6">Сбросить</ButtonForm>
        </div>
      </form>
    </FormProvider>
  );
};

export default ResetPasswordForm;
