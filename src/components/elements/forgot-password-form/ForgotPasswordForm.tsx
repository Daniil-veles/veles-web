import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field/FormField";
import { AuthService } from "@/services/auth.service";
import { ComponentFormEnum } from "@/types/types.interface";
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
      const response = await AuthService.forgotPassword(data);
      console.log(response);

      if (response.status == 202) {
        setUserEmail(data.email);
        router.push("/auth/reset-password");
        methods.reset();
      }
    } catch (error) {
      console.error("Failed to create user:", error.response);
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

      <h3 className="text-2xl mb-4 text-center">Восстановить пароль</h3>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <FormField
                value={{
                  id: "email",
                  name: "email",
                  label: "Почта",
                  placeholder: "test@mail.ru",
                  type: "email",
                  componentType: ComponentFormEnum.INPUT,
                  required: true,
                }}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-min text-base py-4 bg-blue-500 text-white rounded-full font-normal"
            >
              Отправить
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ForgotPasswordForm;
