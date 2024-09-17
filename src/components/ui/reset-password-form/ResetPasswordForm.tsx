import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import ButtonForm from "../custom-button/button-form/ButtonForm";
import CustomInput from "../custom-input/CustomInput";
import {
  formDefaultValues,
  ResetPasswordFormDataType,
  resetPasswordSchema,
} from "./utils";

const ResetPasswordForm: React.FC<{
  onSubmit: (data: { password: string; confirmPassword: string }) => void;
}> = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm<ResetPasswordFormDataType>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
  });

  return (
    <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              className=""
              fieldData={{
                id: "password",
                name: "password",
                label: "Новый пароль",
                placeholder: "*****",
                type: "password",
              }}
              fieldValue={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error}
              required
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              className=""
              fieldData={{
                id: "confirmPassword",
                name: "confirmPassword",
                label: "Подтвердите пароль",
                placeholder: "*****",
                type: "password",
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
          <ButtonForm className="w-full h-min mt-6">Сбросить</ButtonForm>
        </div>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
