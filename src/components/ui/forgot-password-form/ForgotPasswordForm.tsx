import ButtonForm from "@/components/ui/custom-button/button-form/ButtonForm";
import CustomInput from "@/components/ui/custom-input/CustomInput";
import { AuthService } from "@/services/auth.service";
import { setUserEmail } from "@/utils/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import {
  ForgotPasswordFormDataType,
  forgotPasswordSchema,
  formDefaultValues,
} from "./utils";

const ForgotPasswordForm: React.FC = () => {
  const router = useRouter();

  const { control, handleSubmit, reset } = useForm<ForgotPasswordFormDataType>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
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

      reset();
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <>
      <button
        className="flex items-center text-gray-500 hover:text-c-blue-500 py-2 mb-4"
        onClick={() => router.back()}
      >
        <CircleArrowLeft className="mr-1.5" />

        <span className="text-sm">Вернуться</span>
      </button>

      <h3 className="text-xl mb-4 text-center">Восстановить пароль</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              className=""
              fieldData={{
                id: "email",
                name: "email",
                label: "Почта",
                placeholder: "m@example.com",
                type: "email",
              }}
              fieldValue={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error}
              required
            />
          )}
        />

        <div className="flex justify-center">
          <ButtonForm className="w-full h-min mt-6">Отправить</ButtonForm>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
