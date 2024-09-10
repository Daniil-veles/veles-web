import ButtonForm from "@/components/ui/custom-button/button-form/ButtonForm";
import FormField from "@/components/ui/form-field/FormField";
import { AuthService } from "@/services/auth.service";
import { ComponentFormEnum } from "@/types/form.interface";
import { setUserEmail } from "@/utils/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const ForgotPasswordForm: React.FC = () => {
  const router = useRouter();
  const forgotPasswordSchema = z.object({
    email: z.string().email({ message: "Неверный формат email адреса." }),
  });

  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: { email: string }) {
    try {
      // COMMENT: Замокал отправку кода
      console.log("Код отправлен на почту:", data);
      router.push("/auth/reset-password");

      // const response = await AuthService.forgotPassword(data);
      // console.log(response);

      // if (response.status == 202) {
      //   setUserEmail(data.email);
      //   methods.reset();
      //   router.push("/auth/reset-password");
      // }
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <>
      <button
        className="flex items-center text-gray-500 hover:text-c-blue py-2 mb-4"
        onClick={() => router.back()}
      >
        <CircleArrowLeft className="mr-1.5" />

        <span className="text-sm">Вернуться</span>
      </button>

      <h3 className="text-2xl mb-4 text-center">Восстановить пароль</h3>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField
            value={{
              id: "email",
              name: "email",
              label: "Почта",
              placeholder: "test@mail.ru",
              type: "email",
              componentType: ComponentFormEnum.INPUT,
              required: true,
              className: ''
            }}
          />

          <div className="flex justify-center">
            <ButtonForm className="w-full h-min mt-6">Отправить</ButtonForm>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ForgotPasswordForm;
